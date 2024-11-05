import {useEffect, useState} from "react";
import ColorItem from "./ColorItem";
import {toast} from "react-toastify";
import {MyFetch} from "../../helpers/MyFetch";
import ColorForm from "./ColorForm";

export default () => {
    const [colors, setColors] = useState([]);
    const [paginate, setPaginate] = useState({});

    const delColor = (id) => {
        MyFetch('ApiColor/' + id, {
            method: "DELETE"
        }).then(res => {
            setColors(prevColors => prevColors.filter(color => color.id !== id));
            toast.success("Color deleted successfully");
        }).catch(err => {
            toast.error("Failed to delete color");
        });
    };

    const getColors = () => {
        MyFetch('ApiColor')
            .then(res => {
                setColors(res.data);
                setPaginate(res.paginate);
                toast.info("Total Items: " + res.paginate.totalItems);
            })
            .catch(err => {
                toast.error("Failed to fetch colors");
            });
    };

    useEffect(() => {
        getColors();
    }, []);

    return (
        <>
            <h1>Colors</h1>
            <ul>
                {colors.map((color) => (
                    <ColorItem color={color} delColor={delColor} key={color.id}/>
                ))}
            </ul>
            <ColorForm getColors={getColors} />
        </>
    );
};
