import image1 from "../assets/img/Pizza.jpg"
import {useDispatch, useSelector} from "react-redux";
import {buyItem} from "../redux/item/item.reducerAction";

const Items = () => {
    const itemInfo = useSelector( (state) => {
       return state['itemRed']
    })
    const dispatch = useDispatch()
    // const [item , setItem] = useState({
    //     count : 45
    // })

    let clickItem = () => {
        dispatch(buyItem())
        // setItem({
        //     count : item.count - 1
        // })
    }

    return(
        <>
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src={image1} alt="pizza" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <h2>ITEMS : { itemInfo.count }</h2>
                </div>
                <div className="col-md-4">
                    <button onClick={clickItem} className="btn btn-outline-success font-weight-bold">Buy</button>

                </div>
            </div>

        </>

    )
}
export default Items