import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
export const Dashboard = ()=>{

    return (
        <div>
            <Appbar  />
            <div className="m-8">
                <Balance value={10000} />
                {/* Your other components go here */}
               <Users/>
            </div>
        </div>
    );
}