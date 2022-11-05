import { World } from "@xrengine/engine/src/ecs/classes/World";
import { addComponent, removeAllComponents } from "@xrengine/engine/src/ecs/functions/ComponentFunctions";
import { createEntity, removeEntity } from "@xrengine/engine/src/ecs/functions/EntityFunctions";
import { VPSComponent } from "@xrengine/engine/src/scene/components/VPSComponent";

export default async function SceneSystem(world: World) {
    const vpsEntity = createEntity()
    const vpsComponent = addComponent(vpsEntity, VPSComponent)
    return {
        execute: () => {},
        cleanup: () => {
            removeAllComponents(vpsEntity)
            removeEntity(vpsEntity)
        }
    }
}