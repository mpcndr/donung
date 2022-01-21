export default function RegisSuccess() {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                การสมัครสมาชิกเสร็จสิ้น
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              สมัครสมาชิกเรียบร้อยเเล้ว. กรุณาเข้าสู่ระบบอีกครั้ง
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                ตกลง
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
