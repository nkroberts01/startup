import React from 'react';

export function Login() {
    return (
        <main class="container-fluid text-center">
        <div class="container">
            <h1 class="login-header">Login</h1>
            <form method="get" action="index.html">
                <div class="form-outline mb-4">
                    <label class="form-label" for="username">Username</label>
                    <input type="text" id="username" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" id="password" class="form-control" />
                </div>
                <button type="button" class="btn btn-primary btn-block mb-4" onclick="loginUser()">Sign in</button>
                <button type="button" class="btn btn-primary btn-block mb-4" onclick="createUser()">Register</button>
                <button type="button" class="btn btn-primary btn-block mb-4" onclick="logout()">Logout</button>
            </form>
        </div>
        <div class="modal fade" id="msgModal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-dark">
              <div class="modal-body">error message here</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}