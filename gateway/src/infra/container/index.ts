import { container } from "tsyringe";
import { ITokenAdapter, JwtAdapter } from "@shared/adapters/token";

container.registerSingleton<ITokenAdapter>("TokenAdapter", JwtAdapter);
