export function LoginPage({ onSwitch }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf9f5] via-[#f5ede0] to-[#ede0cc] flex items-center justify-center px-4 py-12">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-[#C9B19420] border border-[#ede5da] overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#C9B194] via-[#e8d5bb] to-[#C9B194]" />

        <div className="px-8 py-9">
          {/* Logo */}
          <a
            href="#"
            className="block text-center text-[#C9B194] text-3xl font-bold tracking-tight mb-1"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            UrbanMart
          </a>
          <p className="text-center text-gray-400 text-[13px] mb-8">
            Welcome back — sign in to your account
          </p>

          {/* Social */}
          <div className="flex gap-3 mb-5">
            <SocialBtn>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </SocialBtn>
            <SocialBtn>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </SocialBtn>
          </div>

          <Divider />

          {/* Form */}
          <form
            className="flex flex-col gap-4 mt-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              icon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#C9B194] w-3.5 h-3.5"
                />
                <span className="text-[12px] text-gray-500">Remember me</span>
              </label>
              <a
                href="#"
                className="text-[12px] text-[#C9B194] hover:text-[#9a7f5e] font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-1 w-full bg-[#1a1a1a] hover:bg-[#C9B194] text-white font-medium py-3.5 rounded-xl text-[14px] transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Switch */}
          <p className="text-center text-[13px] text-gray-400 mt-6">
            Don't have an account?{" "}
            <button
              onClick={onSwitch}
              className="text-[#C9B194] hover:text-[#9a7f5e] font-semibold transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
