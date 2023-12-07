import { BRAND_NAME } from "@/app/ui/constants";

export default function LoginPage() {
  return (
    <div>
      <div>
        <p>Welcome to {BRAND_NAME} </p>
      </div>
      <div>
        <form action="">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="coffeelover" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" placeholder="***" />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="text" id="confirm_password" placeholder="***" />
          </div>
          <button>Register</button>
        </form>

        <p>Already have an account?</p>
      </div>
    </div>
  );
}
