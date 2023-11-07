import { makeHello } from "shared/module";
import { Workspace } from "@rbxts/services";

//Workspace.GetPropertyChangedSignal("DistributedGameTime").Connect(() => {
	//print(Workspace.DistributedGameTime);
//}/);

print("Compiled");
print(makeHello("main.server.ts"));
