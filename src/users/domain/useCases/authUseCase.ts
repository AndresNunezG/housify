import { type IAuthEmailPassword } from "@users/domain/models"
import { IAuthRepository } from "@users/domain/useCases"

export function LogoutUseCase(authRepository: IAuthRepository) {
  async function execute() {
    await authRepository.logout()
  }

  return { execute }
}

export function LoginWithEmailAndPasswordUseCase(authRepository: IAuthRepository) {
  async function execute(data: IAuthEmailPassword) {
    await authRepository.loginWithEmailAndPassword(data)
  }

  return { execute }
}

export function LoginWithProviderUseCase(authRepository: IAuthRepository) {
  async function execute() {
    await authRepository.loginWithProvider()
  }

  return { execute }
}

export function RegisterWithEmailAndPasswordUseCase(authRepository: IAuthRepository) {
  async function execute(data: IAuthEmailPassword) {
    await authRepository.registerWithEmailAndPassword(data)
  }

  return { execute }
}
