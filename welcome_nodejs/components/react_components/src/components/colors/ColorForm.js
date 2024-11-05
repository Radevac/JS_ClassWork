import {useState} from 'react';
import {MyFetch} from "../../helpers/MyFetch";
import MyLog from "../../helpers/MyLog";

export default (props) => {
    const [name, setName] = useState('Default Color Name'); // Ім'я кольору за замовчуванням
    const [selectedColor, setSelectedColor] = useState('#FF5733'); // Кольор за замовчуванням
    const [code, setCode] = useState('CLR-DEFAULT'); // Код за замовчуванням
    const [file, setFile] = useState(null); // Файл за замовчуванням не завантажено

    const predefinedColors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];

    const onSubmit = (ev) => {
        ev.preventDefault();

        // Збираємо дані у JSON
        const colorData = {
            name,
            rgb: selectedColor,
            code,
        };

        console.log("Submitting data:", colorData);

        if (file) {
            const formData = new FormData();
            formData.append('name', colorData.name);
            formData.append('rgb', colorData.rgb);
            formData.append('code', colorData.code);
            formData.append('file', file);

            console.log("Submitting with file:", formData);

            MyFetch('ApiColor', {
                method: 'POST',
                body: formData
            })
                .then(res => {
                    console.log("Response:", res);
                    props.getColors();
                })
                .catch(err => {
                    console.error("Error submitting with file:", err);
                });
        } else {
            // Відправляємо як JSON
            console.log("Submitting without file:", colorData);

            MyFetch('ApiColor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(colorData)
            })
                .then(res => {
                    console.log("Response:", res);
                    props.getColors();  // Оновлюємо список кольорів
                })
                .catch(err => {
                    console.error("Error submitting without file:", err);
                });
        }

        return false;
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <form onSubmit={onSubmit} method='POST' enctype="multipart/form-data">
            {/* Ім'я кольору за замовчуванням */}
            <input
                type='text'
                name='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />

            <input
                type='color'
                name='RGB'
                value={selectedColor}
                onChange={handleColorChange}
                required
            />


            <select onChange={handleColorChange} value={selectedColor}>
                <option value="">Select predefined color</option>
                {predefinedColors.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </select>


            <input
                type='file'
                name='file'
                onChange={handleFileChange}
                accept="image/*"
            />

            <input
                type='text'
                name='Code'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code"
                required
            />

            <input type='submit' value="Add Color"/>
        </form>
    );
};
