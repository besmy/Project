//định nghĩa lại nhung parameter|body| query
import { JwtPayload } from 'jsonwebtoken'
import { TokenType } from '~/constants/enums'
import { UserVerifyStatus } from '~/constants/enums'
import { ParamsDictionary } from 'express-serve-static-core'
export interface RegisterReqBody {
  name: string
  email: string
  password: string
  confirm_password: string
  date_of_birth: string
}

//định nghĩa req cho thằng logoutController
export interface LogoutReqBody {
  refresh_token: string
}
export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
  verify: UserVerifyStatus
}

export interface VerifyEmailReqBody {
  email_verify_token: string
}

export interface VerifyForgotPasswordTokenReqBody {
  forgot_password_token: string
}

export interface ResetPasswordReqBody {
  forgot_password_token: string
  password: string
  confirm_password: string
}

export interface ForgotPasswordReqBody {
  email: string
}

export interface LoginReqBody {
  email: string
  password: string
}

export interface EmailVerifyTokenReqBody {
  email: string
}

export interface VerifyEmailTokenReqBody {
  email_verify_token: string
}

export interface UpdateMeReqBody {
  name?: string
  date_of_birth?: string //vì ngta truyền lên string dạng ISO8601, k phải date
  bio?: string
  location?: string
  website?: string
  username?: string
  avatar?: string
  cover_photo?: string
}

export interface VerifyForgotPasswordReqBody {
  forgot_password_token: string
}

export interface FollowReqBody {
  followed_user_id: string
}

//cho UnfollowReqParams kế thừa ParamsDictionary
export interface UnfollowReqParams extends ParamsDictionary {
  user_id: string
}

//ta làm luôn cho GetProfileReqParams
export interface GetProfileReqParams extends ParamsDictionary {
  username: string
}

export interface ChangePasswordReqBody {
  old_password: string
  password: string
  confirm_password: string
}

export interface RefreshTokenReqBody {
  refresh_token: string
}
