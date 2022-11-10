import { World } from "@xrengine/engine/src/ecs/classes/World";
import { addComponent, getComponent, removeAllComponents } from "@xrengine/engine/src/ecs/functions/ComponentFunctions";
import { createEntity, removeEntity } from "@xrengine/engine/src/ecs/functions/EntityFunctions";
import { VPSWayspotComponent } from "@xrengine/engine/src/xr/VPSComponents";

export default async function SceneSystem(world: World) {
    const vpsEntity = createEntity()
    addComponent(vpsEntity, VPSWayspotComponent)
    const vpsWayspotComponent = getComponent(vpsEntity, VPSWayspotComponent)
    return {
        
        execute: () => {
            
        },
        cleanup: () => {
            removeAllComponents(vpsEntity)
            removeEntity(vpsEntity)
        }
    }
}