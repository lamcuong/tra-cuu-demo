import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
export function DialogDemo(props: any) {
  const router = useRouter();
  return (
    <div>
      <Dialog
        open={props.isShowDialog}
        onOpenChange={() => {
          router.push("/dang-nhap");
        }}
      >
   
        <DialogContent className="sm:max-w-[425px]">
          <div className="grid gap-4 py-4">
            <p>Phiên đăng nhập hết hạn, Vui lòng đăng nhập lại</p>
            <Button onClick={() => router.push("/dang-nhap")}>Đăng nhập lại</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
