//@ts-nocheck
"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getCookie, setCookie } from "cookies-next";
import { Space, Table, Tag } from "antd";
import TableComponent from "./table";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import _axios from "@/api/config";
import LoginModal, { DialogDemo } from "./login";
import moment from "moment";
import { LoadingService } from "@/utils/LoadingService";
type RpaProps = {};
const danhSachCoDong: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text, record, index) => <a>{index + 1}</a>,
    align: "left",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
    align: "left",
  },
  {
    title: "CCCD/MST",
    dataIndex: "cardId",
    key: "cardId",
    align: "left",
  },
  {
    title: "% Góp Vốn	",
    key: "sex",
    dataIndex: "sex",
    align: "left",
  },
  {
    title: "Chức Vụ	",
    key: "birthday",
    dataIndex: "birthday",
    align: "left",
  },
];
const thayDoiGiayPhepDKKD: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text, record, index) => <a>{index + 1}</a>,
    align: "left",
  },
  {
    title: "Thời Gian Thay Đổi",
    dataIndex: "ngayThayDoiTTGanNhat",
    key: "ngayThayDoiTTGanNhat",
    align: "left",
  },
  {
    title: "Nội Dung Thay Đổi",
    dataIndex: "content",
    key: "content",
    align: "left",
  },
];
const danhSachNguoiLienQuan = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text, record, index) => <a>{index + 1}</a>,
    align: "left",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
    align: "left",
  },
  {
    title: "CCCD/MST",
    dataIndex: "cardId",
    key: "cardId",
    align: "left",
  },
  {
    title: "% Góp Vốn	",
    key: "gopVon",
    dataIndex: "gopVon",
    align: "left",
  },
  {
    title: "Chức Vụ	",
    key: "chucVu",
    dataIndex: "chucVu",
    align: "left",
  },
];
const danhSachCongTyLienQuan = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text, record, index) => {
      console.log("1", index);
      return <a>{index + 1}</a>;
    },
    align: "left",
  },
  {
    title: "Liên quan với	",
    dataIndex: "nguoiLienQuan",
    key: "nguoiLienQuan",
    // render:(text,record)=>{
    //   console.log('tesx',record)
    //   return<div>{record.thongTinChiTiet.daiDienPL}</div>
    // },
    align: "left",
  },
  {
    title: "Tên Cty",
    dataIndex: "tenNNT",
    key: "tenNNT",
    align: "left",
  },
  {
    title: "MST	",
    dataIndex: "mst",
    key: "mst",
    align: "left",
  },
  {
    title: "% Góp Vốn",
    dataIndex: "gopVon",
    key: "gopVon",
    align: "left",
  },
  {
    title: "Chức vụ",
    dataIndex: "chucVu",
    key: "chucVu",
    align: "left",
  },
  {
    title: "Tình Trạng Hoạt Động",
    dataIndex: "ghiChu",
    key: "ghiChu",
    align: "left",
  },
];
const danhSachChiNhanh: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text, record, index) => <a>{index + 1}</a>,
    align: "left",
  },
  {
    title: "Tên CN",
    dataIndex: "tenNNT",
    key: "tenNNT",
    align: "left",
  },
  {
    title: "MST",
    dataIndex: "mst",
    key: "mst",
    align: "left",
  },
  {
    title: "Tình trạng hoạt động",
    key: "ghiChu",
    dataIndex: "ghiChu",
    align: "left",
  },
];

const Rpa: React.FC<RpaProps> = () => {
  const [valueNNT, setValueNTT] = useState({
    taxCode: "0315320846",
    cardId: "",
  });
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataDanhSachChiNhanh, setDataDanhSachChiNhanh] = useState([]);
  const [dataDanhSachCoDong, setDataDanhSachCoDong] = useState([]);
  const [dataDanhSachNguoiLienQuan, setDataDanhSachNguoiLienQuan] = useState([]);
  const [dataDanhSachCongTyLienQuan, setDataDanhSachCongTyLienQuan] = useState([]);

  const apiDanhSachChiNhanh = "http://14.225.5.61/iEnterprise/oauth/enterprise/msb/tracuunnt";
  const apiDanhSachCoDong = "http://14.225.5.61/iEnterprise/oauth/enterprise/minvoice/getListShareholder";
  const apiDanhSachNguoiLienQuan = "http://14.225.5.61/iEnterprise/oauth/enterprise/minvoice/getListShareholder";
  const apiDanhSachCongTyLienQuan = "http://14.225.5.61/iEnterprise/oauth/enterprise/msb/tracuunnt";

  const handleChangeNNT = (name, newValue) => {
    setValueNTT({ ...valueNNT, [name]: newValue });
  };
  const getDanhSachCongTyLienQuan = async (danhSachNguoiLienQuan) => {
    const danhSachCongTyLienQuan = [];
    for (const nguoiLienQuan of danhSachNguoiLienQuan) {
      const congTyLienQuan = await handleApiRequest(apiDanhSachCongTyLienQuan, { cardId: nguoiLienQuan.cardId });
      if (congTyLienQuan.data) {
        congTyLienQuan.data.map((item) => {
          danhSachCongTyLienQuan.push({ ...item, nguoiLienQuan: nguoiLienQuan.name });
        });
        // danhSachCongTyLienQuan.push([...congTyLienQuan.data]);
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
    console.log("123123");
    setDataDanhSachCongTyLienQuan(danhSachCongTyLienQuan);
  };
  console.log("hehe", dataDanhSachCongTyLienQuan);
  const resetData=()=>{
    setDataDanhSachChiNhanh([])
    setDataDanhSachCoDong([])
    setDataDanhSachCongTyLienQuan([])
    setDataDanhSachNguoiLienQuan([])
  }
  const traCuuNNT = async () => {
    
    LoadingService.start()
    resetData()
    setIsLoading(true);
    try {
      const danhSachChiNhanh = await handleApiRequest(apiDanhSachChiNhanh, {
        taxCode: valueNNT.taxCode ? valueNNT.taxCode:null,
        cardId: valueNNT.cardId ? valueNNT.cardId : null,
      });
      // if (danhSachChiNhanh.status === 500) {
      //   throw new Error("Lỗi hệ thống");
      // }
      setDataDanhSachChiNhanh(danhSachChiNhanh.data);

      // const danhSachCoDong = await handleApiRequest(apiDanhSachCoDong, {taxCode:valueNNT.taxCode});
      // if (danhSachCoDong.status === 500) {
      //   throw new Error("Lỗi hệ thống");
      // }
      // console.log('123',danhSachCoDong)
      // setDataDanhSachCoDong(danhSachCoDong.data);
      // setDataDanhSachCoDong([
      //   { ten: "Nguyễn Văn A", cardId: "001", gopVon: "10%", chucVu: "Trưởng phòng" },
      //   { ten: "Nguyễn Văn B", cardId: "002", gopVon: "50%", chucVu: "Giám đốc" },
      // ]);

      const danhSachNguoiLienQuan = await handleApiRequest(apiDanhSachNguoiLienQuan, { taxCode: valueNNT.taxCode });
      if (danhSachNguoiLienQuan.status === 500) {
        throw new Error("Lỗi hệ thống");
      }
      setDataDanhSachNguoiLienQuan(danhSachNguoiLienQuan.data);

      await getDanhSachCongTyLienQuan(danhSachNguoiLienQuan.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      LoadingService.stop()
      if (error?.response?.status === 401) {
        setIsShowDialog(true);
      } else {
        toast.error("Lỗi hệ thống, Vui lòng thử lại");
      }
    }
    setIsLoading(false);
    LoadingService.stop()

  };

  // const traCuu = async () => {
  //   setIsLoading(true);
  //   try {
  //     const [danhSachChiNhanh, danhSachCoDong, danhSachNguoiLienQuan] = await Promise.all([
  //       handleApiRequest(apiDanhSachChiNhanh, requestData(valueNNT.taxCode, null)),
  //       handleApiRequest(apiDanhSachCoDong, requestData(valueNNT.taxCode, null)),
  //       handleApiRequest(apiDanhSachCongTyLienQuan, requestData(valueNNT.taxCode, null)),
  //     ]);
  //     setDataDanhSachChiNhanh(danhSachChiNhanh);
  //     setDataDanhSachCoDong(danhSachCoDong);
  //     setDataDanhSachNguoiLienQuan(danhSachNguoiLienQuan);

  //     await getDanhSachCongTyLienQuan(danhSachNguoiLienQuan);

  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //     if (error.response && error.response.status === 401) {
  //       setIsShowDialog(true);
  //     } else {
  //       toast.error("Lỗi hệ thống, Vui lòng thử lại");
  //     }
  //   }
  // };
  console.log(dataDanhSachChiNhanh);
  const handleApiRequest = async (apiUrl, requestData) => {
    try {
      const response = await _axios.post(apiUrl, requestData);
      // if (response.data.status === 401) {
      //   throw new Error("Loi he thong");
      // }
      // if (response.data.status === 500) {
      //   throw new Error("Loi he thong");
      // }
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="flex gap-10 justify-center mt-2 px-5 flex-col">
      <DialogDemo isShowDialog={isShowDialog} setIsShowDialog={setIsShowDialog} />

      <div className="w-1/4 flex flex-col  mx-auto">
        <label htmlFor="taxCode">Mã số thuế</label>
        <Input
          id="taxCode"
          placeholder="Mã số thuế"
          onChange={(e) => handleChangeNNT(e.target.name, e.target.value)}
          className=" border-black"
          type="text"
          value={valueNNT.taxCode}
          name="taxCode"
        />
        <Input
          id="cardId"
          placeholder="Card ID"
          onChange={(e) => handleChangeNNT(e.target.name, e.target.value)}
          className=" border-black mt-1"
          type="text"
          value={valueNNT.cardId}
          name="cardId"
        />
        <Button disabled={isLoading} className="w-1/2 mx-auto mt-5" type="button" onClick={traCuuNNT}>
          {isLoading ? "Đang tra cứu" : "Tra cứu"}
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-10 p-5">
        {/* <TableComponent
          title="Danh sách Cổ đông/Người góp vốn hiện tại"
          columns={danhSachCoDong}
          data={dataDanhSachCoDong}
        /> */}
        <TableComponent title="Danh sách chi nhánh" columns={danhSachChiNhanh} data={dataDanhSachChiNhanh} />

        <TableComponent title="Thay đổi giấy phép ĐKKD" columns={thayDoiGiayPhepDKKD} data={dataDanhSachChiNhanh} />
        <TableComponent
          title="Danh sách người liên quan"
          columns={danhSachNguoiLienQuan}
          data={dataDanhSachNguoiLienQuan}
        />
        <TableComponent
          title="Danh sách Công ty liên quan của Người Liên Quan"
          columns={danhSachCongTyLienQuan}
          data={dataDanhSachCongTyLienQuan}
        />
      </div>

      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
};

export default Rpa;
