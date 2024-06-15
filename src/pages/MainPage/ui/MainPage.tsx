import {memo} from "react";
import {GreetingsForm} from "../../../features/GreetingsForm";


const MainPage = memo(() => {

    return (
        <div>
            Main Page
            <GreetingsForm />
        </div>
    )
});

export default MainPage;