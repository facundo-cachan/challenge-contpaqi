import { useState } from "react";
import { Button, Image, Link, Modal } from "../../..";

import type VCardProps from "./types";

const VCard = ({ picture, name, role, className }: VCardProps) => {
  const [show, setShow] = useState<boolean>(false);
  const close = () => setShow(!show);

  return (
    <div className={className}>
      <Button onClick={close}>
        <Image src={picture} alt={name} className="w-10 h-10 rounded-full" />
      </Button>
      <Modal className={`mt-14 ${show ? "block" : "hidden"} bg-blue`}>
        <ul className="p-2 text-center">
          <li>{name}</li>
          <li>
            <Link to={`/${role}`} title={role}>
              {role?.toUpperCase()}
            </Link>
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default VCard;
