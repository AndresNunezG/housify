import {
  LogoutUseCase,
  LoginWithProviderUseCase,
  RegisterWithEmailAndPasswordUseCase,
  LoginWithEmailAndPasswordUseCase,
} from "@/users/domain/useCases";
import { FirebaseAuthRepository } from "@/users/infrastructure/repository/FirebaseAuthRepository";

const logoutUseCase = LogoutUseCase(new FirebaseAuthRepository()).execute
const loginWithProviderUseCase = LoginWithProviderUseCase(new FirebaseAuthRepository()).execute
const loginWithEmailAndPasswordUseCase = LoginWithEmailAndPasswordUseCase(new FirebaseAuthRepository()).execute
const registerWithEmailAndPasswordUseCase = RegisterWithEmailAndPasswordUseCase(new FirebaseAuthRepository()).execute

export {
  logoutUseCase,
  loginWithProviderUseCase,
  loginWithEmailAndPasswordUseCase,
  registerWithEmailAndPasswordUseCase,
}
