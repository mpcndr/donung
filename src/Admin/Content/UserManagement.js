import axios from "axios";
import def from "../../Def";
import { adminAuthDel, adminAuthPost } from "../../Helper/apiHelper";

export default function UserManagement(props) {
  let admin = props.admin;
  let setAdmin = props.setAdmin;
  let cookieAdmin = props.cookieAdmin;
  return (
    <>
      <h4>User Management</h4>
      <button
        type="button"
        class="btn btn-success btn-sm my-2"
        onClick={() => {
          adminAuthPost("/administrator", {
            email: new Date().toLocaleString() + "@hotmail.com",
            password: "1234",
            user: new Date().toLocaleString(),
          },
          cookieAdmin.tokenAdmin
          );
        }}
      >
        <i class="bi bi-plus-lg me-1"></i>
        เพิ่มผู้ดูแล
      </button>
      <div class="table-responsive">
        <table class="table table-sm table-hover justify-content-center align-middle text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>manage</th>
            </tr>
          </thead>
          <tbody>
            {admin &&
              admin.map((admins) => {
                return (
                  <tr>
                    <td scope="row">{admins.id_admin}</td>
                    <td>{admins.email}</td>
                    <td>{admins.admin_name}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary  btn-sm me-3"
                      >
                        <i class="bi bi-pencil-square me-1"></i>
                        แก้ไข
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger btn-sm"
                        onClick={() => {
                          adminAuthDel(
                            "/administrator",
                            { id_admin: admins.id_admin },
                            cookieAdmin.tokenAdmin
                          ).then((res) => {
                            alert(cookieAdmin.tokenAdmin);
                            // window.location.reload();
                            console.log("success");
                          });
                        }}
                      >
                        <i class="bi bi-trash me-1"></i>
                        ลบ
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
