import { type IAuthEmailPassword } from "@users/domain/models"
import { IAuthRepository } from "@users/domain/useCases";
import {
  logout,
  loginWithProvider,
  loginWithEmailAndPassword,
  registerUserWithEmailAndPassword,
} from '@/firebase'
import router from "@/routes";

export class FirebaseAuthRepository implements IAuthRepository {
  async registerWithEmailAndPassword(data: IAuthEmailPassword): Promise<void> {
    try {
      await registerUserWithEmailAndPassword(data.email, data.password)
      router.push({ name: "properties" })
    } catch (error) {
      console.error(error);
    }
  }
  async loginWithEmailAndPassword(data: IAuthEmailPassword): Promise<void> {
    try {
      await loginWithEmailAndPassword(data.email, data.password)
      router.push({ name: "properties" })
    } catch (error) {
      console.error(error);
    }
  }
  async loginWithProvider(): Promise<void> {
    try {
      await loginWithProvider()
      router.push({ name: "properties" })
    } catch (error) {
      console.error(error);
    }
  }
  async logout(): Promise<void> {
    try {
      await logout()
      router.push({ name: "home" })
    } catch (error) {
      console.error(error);
    }
  }
}
