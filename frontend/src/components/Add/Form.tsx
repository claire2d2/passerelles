import { useState } from "react";
import { CREATE_PASSERELLE } from "../../requests/passerelles.requests";
import { CreatePasserelleInput, CreatePasserelleMutation, CreatePasserelleMutationVariables } from "../../generated/graphql";
import { useMutation } from "@apollo/client";

// TODO: harmonize text input for city and country (capitalize etc)

const Form = ({ data }: any) => {
	const [formData, setFormData] = useState<any>({
		title: "",
		description: "",
		country: "",
		city: "",
		lat: data.lat.toString(),
		lng: data.lng.toString(),
        image: "https://media.istockphoto.com/id/177770941/fr/photo/golden-gate-bridge-san-francisco.jpg?s=612x612&w=0&k=20&c=4T7VHWBqTC7MRkaR7Ae8ZzzEW7n7Dp_KMDmUtxW8k-E="
	});

    const [createPasserelle, { error }] = useMutation<
    CreatePasserelleMutation,
    CreatePasserelleMutationVariables
  >(CREATE_PASSERELLE);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
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
            console.log(error)
        }
    }

	const inputStyle = "border border-disabled border-solid rounded-md";

	return (
		<div>
			<form className="text-left" onSubmit={handleSubmit}>
				<div>Rajouter une passerelle:</div>
				<ul>
					<li>
						<label htmlFor="title">Titre :</label>
						<input
							name="title"
							type="text"
							value={data.title}
							className={inputStyle}
                            onChange={handleChange}
							required
						/>
					</li>
					<li>
						<label htmlFor="description">Description :</label>
						<input
							name="description"
							type="text"
							value={data.description}
							className={inputStyle}
                            onChange={handleChange}
						/>
					</li>
					<li>
						<div>Coordonnées :</div>
						<div>
							<label htmlFor="country">Pays :</label>
							<input
								name="country"
								type="text"
								value={data.country}
								className={inputStyle}
                                onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor="city">City :</label>
							<input
								name="city"
								type="text"
								value={data.city}
								className={inputStyle}
                                onChange={handleChange}
							/>
						</div>
						<p>Lat : {data.lat}</p>
						<p>Lng : {data.lng}</p>
					</li>
					<li>ADD IMAGE HERE</li>
				</ul>
				<button type="submit">Rajouter la passerelle</button>
			</form>
		</div>
	);
};

export default Form;
