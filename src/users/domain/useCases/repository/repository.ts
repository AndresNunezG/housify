import { type IAuthEmailPassword } from "@users/domain/models";

export interface IAuthRepository {
  registerWithEmailAndPassword(data: IAuthEmailPassword): Promise<void>;
  loginWithEmailAndPassword(data: IAuthEmailPassword): Promise<void>;
  loginWithProvider(): Promise<void>;
  logout(): Promise<void>;
}
