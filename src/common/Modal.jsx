import React from "react";
import ButtonFilled from "./ButtonFilled";
import { GiConfirmed } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";

function Modal(props) {
    const { setModalIsOpen, setCartValue, setUniqueCart } = props;

    const handleModal = () => {
        setModalIsOpen(false);
    };
    const handleRemoveAllItems = () => {
        try {
            setCartValue([]);
            setUniqueCart([]);
            setModalIsOpen(false);
            toast.success("All products are deleted");
        } catch (err) {
            toast.error("Something went wrong");
        }
    };
    return (
        <div className="animate-moveUp">
            <div className="w-full max-w-xs rounded-md border-2 border-primary/70 bg-primary/30 p-4 shadow-md">
                <div className="flex flex-col gap-8">
                    <div className="grid place-items-center ">
                        <div className="w-max">
                            <button onClick={handleModal} className="">
                                <span>
                                    <RxCross2 className="text-xl font-bold" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <h2 className="text-center">
                        Are you sure you want to delete all the products?
                    </h2>
                    <div className="flex w-full gap-2">
                        <ButtonFilled
                            btnLebel="deny"
                            btnType="button"
                            onClick={() => setModalIsOpen(false)}
                            classNames="py-2 w-full flex items-center justify-center gap-2 px-8 capitalize font-semibold cursor-pointer w-max bg-primary text-nutral3 hover:bg-[#0c349b] rounded-md transition-all ease-in-out duration-[300ms]"
                        >
                            <RxCross2 classNames="text-2xl font-bold text-nutral3 mr-4" />
                        </ButtonFilled>
                        <ButtonFilled
                            btnLebel="confirm"
                            btnType="button"
                            onClick={handleRemoveAllItems}
                            classNames='"py-2 px-8 flex items-center justify-center gap-2 capitalize font-semibold cursor-pointer w-max bg-nutral3 text-denger hover:bg-denger rounded-md hover:text-nutral3 transition-all ease-in-out w-full duration-[300ms]"'
                        >
                            <GiConfirmed classNames="text-2xl font-bold text-denger mr-4 block" />
                        </ButtonFilled>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
