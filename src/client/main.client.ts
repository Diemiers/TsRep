import FlyComputer from "shared/GaySystem/FlyComputer";
import { Players } from "@rbxts/services";
import { makeHello } from "shared/module";

const flyCMP = new FlyComputer(new CFrame(0, 0, 0), new Vector3(1, 1, 1), Players.LocalPlayer);

print(makeHello("main.client.ts"));
