"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const path = usePathname();
  console.log(path);
  const activeClass = "bg-neutral-500 hover:bg-neutral-500 cursor-not-allowed";
  return (
    <>
      <div className="bg-neutral-200 p-5">
        <ul className="flex gap-10 ">
          <li>
            <Button
              className={path === "/tra-cuu/danh-sach" ? activeClass : ""}
              type="button"
              onClick={() => {
                router.push("/tra-cuu/danh-sach");
              }}
            >
              Thông tin doanh nghiệp
            </Button>
          </li>
          <li>
            <Button
              className={path === "/tra-cuu/tsbd" ? activeClass : ""}
              type="button"
              onClick={() => {
                router.push("/tra-cuu/tsbd");
              }}
            >
              Tài sản bảo đảm
            </Button>
          </li>
          <li>
            <Button
              className={path === "/tra-cuu/phat-nguoi" ? activeClass : ""}
              type="button"
              onClick={() => {
                router.push("/tra-cuu/phat-nguoi");
              }}
            >
              Phạt nguội
            </Button>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
};

export default Layout;
