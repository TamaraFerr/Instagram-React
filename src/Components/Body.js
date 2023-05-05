import NavBarr from "./NavBarr"
import Stories from "./Stories"
import Posts from "./Posts"
import SideBarr from "./SideBarr"

export default function Body() {
    return(
        <>
            <NavBarr />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />                    
                </div>
                <SideBarr />
            </div>
        </>
    )
}