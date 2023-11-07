import { PartInterface } from "./Abstractions/interfaces";

interface CharacterInt extends Model {
	HumanoidRootPart?: BasePart;
	Humanoid?: Humanoid;
}

class MyPart implements PartInterface {
	private cframe: CFrame;
	private velocity: Vector3;
	private Player: Player;

	constructor(cframe: CFrame, velocity: Vector3, Player: Player) {
		this.cframe = cframe;
		this.velocity = velocity;
		this.Player = Player;
		const Character: CharacterInt | undefined = Player.Character;
		if (Character) {
			const BodyVelocity = new Instance("LinearVelocity", Character.HumanoidRootPart);
			BodyVelocity.VectorVelocity = velocity;
			print("Gay Created");
		}
	}

	GetCFrame(): CFrame {
		return this.cframe;
	}

	SetVelocity(velocity: Vector3): void {
		this.velocity = velocity;
	}
}
