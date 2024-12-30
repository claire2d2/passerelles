import { useState, useEffect } from "react";
import { CREATE_PASSERELLE } from "../../requests/passerelles.requests";
import {
	CreatePasserelleMutation,
	CreatePasserelleMutationVariables,
} from "../../generated/graphql";
import { useMutation } from "@apollo/client";
import "./Add.css";
import UploadButton from "../UploadFile/UploadButton";
// TODO: harmonize text input for city and country (capitalize etc)

const Form = ({ data }: any, setIsMarker: React.Dispatch<React.SetStateAction<boolean>>) => {
	const [formData, setFormData] = useState<any>({
		title: "",
		description: "",
		country: "",
		city: "",
		lat: data.lat.toString(),
		lng: data.lng.toString(),
		image:
			"",
	});
	const [imageUrl, setImageUrl] = useState<string>("")
    const [canSubmit, setCanSubmit] = useState<boolean>(false)

    // If mandatory fields (title, lat, lng TODO add image) are missing, disable button
    useEffect(() => {
        if(formData.title === "" || formData.lat === "" || formData.lng === "") {
            setCanSubmit(false)
        }
        else {
            setCanSubmit(true)
        }
    },[formData])

	useEffect(() => {
		setFormData((prevData: any) => ({...prevData, image: imageUrl}))
	}, [imageUrl])

	const [createPasserelle, { error }] = useMutation<
		CreatePasserelleMutation,
		CreatePasserelleMutationVariables
	>(CREATE_PASSERELLE);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData((prevData: any) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			createPasserelle({
				variables: { data: formData },
				// variables: { data: { ...values, price: +values.price } },
				onCompleted: () => {
					console.log("Passerelle créée");
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

    const handleCloseForm = () => {
        setIsMarker(false)
    }

	const fieldStyle = "flex gap-2";
	const inputStyle = "border border-disabled border-solid rounded-md";
	const labelStyle = "font-semibold";

	return (
		<div>
			<form
				className="text-left flex flex-col gap-3 p-3"
				onSubmit={handleSubmit}
			>
				<div className="text-center text-xl pb-2 font-semibold">
					Rajouter une passerelle:
				</div>
				<ul className="flex flex-col gap-2">
					<li className={fieldStyle}>
						<label htmlFor="title" className={labelStyle}>
							Titre :
						</label>
						<input
							name="title"
							type="text"
							value={data.title}
							className={inputStyle}
							onChange={handleChange}
							required
						/>
					</li>
					<li className={fieldStyle}>
						<label htmlFor="description" className={labelStyle}>
							Description :
						</label>
						<input
							name="description"
							type="text"
							value={data.description}
							className={inputStyle}
							onChange={handleChange}
						/>
					</li>
					<li className="flex flex-col gap-2">
						<div className={fieldStyle}>
							<label htmlFor="country" className={labelStyle}>
								Pays :
							</label>
							<input
								name="country"
								type="text"
								value={data.country}
								className={inputStyle}
								onChange={handleChange}
							/>
						</div>
						<div className={fieldStyle}>
							<label htmlFor="city" className={labelStyle}>
								City :
							</label>
							<input
								name="city"
								type="text"
								value={data.city}
								className={inputStyle}
								onChange={handleChange}
							/>
						</div>
						<p className={fieldStyle}>
							<span className={labelStyle}>Lat : </span>
							{data.lat}
						</p>
						<p className={fieldStyle}>
							<span className={labelStyle}>Lng :</span> {data.lng}
						</p>
					</li>
					<li><label htmlFor="file" className="font-semibold">
        Photo : 
      </label>
	  <UploadButton setImageUrl={setImageUrl}/>
     </li>
				</ul>
				<button disabled={!canSubmit} type="submit" className="bg-main w-1/2 m-auto text-white font-bold p-2 border rounded-md disabled:bg-disabled">Ajouter</button>
                <button className="absolute top-1 right-2 hover:font-semibold" onClick={()=> handleCloseForm()}>x</button>
            </form>
		</div>
	);
};

export default Form;
