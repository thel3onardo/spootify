/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./src/config/lucia").Auth;
  type DatabaseUserAttributes = {
    email: string;
    name: string;
    birthDate: Date;
  };
  //   type DatabaseSessionAttributes = {};
}
