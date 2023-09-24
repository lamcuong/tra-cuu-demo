//@ts-nocheck
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import TableComponent from "../table";
import _axios from "@/api/config";
import { DialogDemo } from "../login";
import { LoadingService } from "@/utils/LoadingService";

type TaiSanProps = {};

const TaiSan: React.FC<TaiSanProps> = () => {
  const testSample = (data) => {
    const startText = "Mô tả tài sản bảo đảm";
    const endText = "ĐĂNG KÝ GIAO DỊCH BẢO ĐẢM";
    let sampleList = [];
    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < data.length; i++) {
      if (data[i] === startText) {
        startIndex = i;
      }
      if (data[i]?.includes(endText)) {
        endIndex = i;
      }
      if (
        (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) ||
        (startIndex !== -1 && i === data.length - 1 && endIndex === -1)
      ) {
        console.log(startIndex, endIndex);
        const extractedData = data.slice(startIndex + 1, endIndex);
        sampleList.push(extractedData);
        startIndex = -1;
        endIndex = -1;
      }
    }
    console.log(sampleList);
    setTest(sampleList);
  };
  const apiTaiSan = "http://14.225.5.61/iEnterprise/oauth/enterprise/minvoice/getSecurityTransaction";
  const [value, setValue] = useState("");
  const [test, setTest] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const resetData=()=>{
    setTest([])
  }
  const handleSubmit = async () => {
    LoadingService.start()
    resetData()
    setIsLoading(true);
    try {
      const data = await _axios.post(apiTaiSan, { taxCode: value });

      testSample(data.data.data.split("\n"));
      setIsLoading(false);
    } catch (error) {
      LoadingService.stop()
      if (error?.response?.status === 401) {
        setIsShowDialog(true);
      }
    }
    LoadingService.stop()
  };
  return (
    <div className="mt-5 w-1/2 mx-auto">
      <DialogDemo isShowDialog={isShowDialog} />
      <label className="text-sm">Mã số thuế/Số đăng ký kinh doanh</label>
      <Input onChange={(e) => setValue(e.target.value)} value={value} className="border-black" />
      <Button disabled={isLoading} onClick={handleSubmit} className="block mt-4 mx-auto" type="button">
        {isLoading ? "Đang tra cứu" : "Tra cứu"}
      </Button>
    
      {test.length > 0 && (
        <div>
          {test.map((item) => {
            return (
              <div>
                <h3 className="font-bold my-4">Mô tả tài sản bảo đảm</h3>
                <div className="border border-neutral-300 p-5">
                  {item.map((text) => {
                    return <p className="my-1">{text}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TaiSan;
