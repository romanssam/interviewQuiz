import {memo} from "react";
import {GreetingSection} from "../../../widgets/GreetingSection";


const MainPage = memo(() => {

    return (
        <div>
            <GreetingSection />
        </div>
    )
});

export default MainPage;