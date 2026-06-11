import OpenInNewOutlined from "@mui/icons-material/OpenInNewOutlined";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";

type Props = {
  openState: boolean;
  close: () => void;
};

export default function DrawerComponent({ openState, close }: Props) {
  return (
    <div>
      <Drawer
        anchor="top"
        open={openState}
        onClose={close}
        elevation={0}
        slotProps={{ paper: { sx: { backgroundColor: '#e7c299' } } }}
      >
        <div className="text-lg font-semibold m-3">
          <Link href="/about">About me</Link>
          <p className="mt-2"><a href="mailto:ahmedysatti@gmail.com">Contact</a></p>
          <p className="mt-2">
            <a href="/CV-ahmed-mohamed.pdf" target="_blank" rel="noopener noreferrer">
              Resume
              <OpenInNewOutlined className="ml-1" />
            </a>
          </p>
        </div>
      </Drawer>
    </div>
  )
}
