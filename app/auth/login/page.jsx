export default function LoginPage() {
  return (
    <div>
      <div>
        <p>Welcome Back </p>
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
          <button>Login</button>
        </form>

        <p>Don't have an account?</p>
      </div>
    </div>
  );
}
