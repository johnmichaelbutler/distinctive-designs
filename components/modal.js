import Image from "next/image";

export default function Modal(props) {
  const { showModal, src, width, height, handleClose } = props;
  const showHideClassName = showModal ? "modal block" : "modal hidden";
  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className="modal-main fixed w-4/5 h-80vh">
        <Image
          src={src}
          layout="fill"
          className="object-contain"
        />
        <p className="text-white -top-14 fixed text-center">
          <button type="button" className="text-lg font-bold" onClick={handleClose}>X&nbsp;</button>
            To close, click anywhere
          </p>
      </section>
    </div>
  )
}