import { http } from "./HttpService";

export function createCurrentAccount(cAccount) {
    return http().post("api/account/create-current", cAccount);
  }

  export function createSavingsAccount(cAccount) {
    return http().post("api/account/create-savings", cAccount);
  }
  
  export function findCurrentAll(sAccount) {
    return http().get("api/account/find-current-all", sAccount);
  }

  export function findSavingsAll(sAccount) {
    return http().get("api/account/find-savings-all", sAccount);
  }