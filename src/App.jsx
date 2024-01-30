import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import Footer from "./components/footer";
import { calcLength } from "framer-motion";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    talent: "",
    pet: "",
    file: null,
    video: null,
  });

  const handleFileChange = (e) => {
    setValues({ ...values, file: e.target.files[0] });
    console.log("Updated values:", values);
  };

  const handleVideoChange = (e) => {
    setValues({ ...values, video: e.target.files[0] });
    console.log("Updated values:", values);
  };

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Nombre completo",
      label: "NOMBRE",
      required: true,
      onChange: (e) => {
        setValues({ ...values, name: e.target.value });
        console.log("Updated values:", values);
      },
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "EMAIL",
      required: true,
      onChange: (e) => {
        setValues({ ...values, email: e.target.value });
        console.log("Updated values:", values);
      },
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "Número de teléfono",
      label: "TELÉFONO",
      required: true,
      onChange: (e) => {
        setValues({ ...values, phone: e.target.value });
        console.log("Updated values:", values);
      },
    },

    {
      id: 4,
      name: "age",
      type: "text",
      placeholder: "Edad",
      label: "EDAD",
      required: true,
      onChange: (e) => {
        setValues({ ...values, age: e.target.value });
        console.log("Updated values:", values);
      },
    },
    {
      id: 5,
      name: "gender",
      type: "select",
      placeholder: "Género",
      label: "GÉNERO",
      options: ["Femenino", "Masculino", "Otros"],
      required: true,
      onChange: (e) => setValues({ ...values, gender: e.target.value }),
      value: values.gender || "",
    },
    {
      id: 6,
      name: "talent",
      type: "select",
      placeholder: "Talento",
      label: "TALENTO",
      options: [
        "Bailarín",
        "Actor (con o sin formación)",
        "Modelo (con o sin formación)",
        "Pintor",
        "Cantante",
        "Locutor",
        "Voice Over",
        "Presentador",
        "Deportista",
        "Fitness",
        "Chef",
        "Barman",
        "Barista",
        "Creador de Contenido",
        "Otro",
      ],
      required: true,
      onChange: (e) => setValues({ ...values, talent: e.target.value }),
      value: values.talent || "",
    },
    {
      id: 7,
      name: "pet",
      type: "select",
      placeholder: "Mascota",
      label: "MASCOTA",
      options: ["Gato", "Perro"],
      required: true,
      onChange: (e) => setValues({ ...values, pet: e.target.value }),
      value: values.pet || "",
    },

    {
      id: 8,
      name: "file",
      type: "file",
      label: "FOTO",
      accept: "png, jpg, webp",
      onChange: handleFileChange,
    },
    {
      id: 9,
      name: "video",
      type: "file",
      label: "VIDEO",
      accept: "video/*",
      onChange: handleVideoChange,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/form/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Form data successfully submitted!");
      } else {
        console.error("Failed to submit form data.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  console.log(values);

  return (
    <div className="app">
      <div className="center">
        <form onSubmit={handleSubmit}>
          <div className="subTittle">
            *SI ES PARA MASCOTAS, POR FAVOR, LLENAR LOS DATOS DE LA MASCOTA Y EN
            EL APARTADO 'OTRO' LLENAR EL NOMBRE DEL PROPIETARIO
          </div>
          <FormInput
            id="name"
            type="text"
            placeholder="Nombre Completo"
            label="NOMBRE"
            required={true}
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
              console.log("Updated values:", values);
            }}
          />

          <div className="input-group">
            <FormInput
              id="phone"
              type="text"
              placeholder="Número de teléfono"
              label="TELÉFONO"
              required={true}
              onChange={(e) => {
                setValues({ ...values, phone: e.target.value });
                console.log("Updated values:", values);
              }}
            />

            <FormInput
              id="age"
              type="text"
              placeholder="Edad"
              label="EDAD"
              required={true}
              onChange={(e) => {
                setValues({ ...values, age: e.target.value });
                console.log("Updated values:", values);
              }}
            />
          </div>

          <div className="input-group">
            <FormInput
              id="gender"
              type="select"
              placeholder="Género"
              label="GÉNERO"
              options={["Femenino", "Masculino", "Otros"]}
              required={true}
              onChange={(e) => {
                setValues({ ...values, gender: e.target.value });
                console.log("Updated values:", values);
              }}
            />
            {values.gender.toLowerCase() === "otros" && (
              <FormInput
                id="other_gender"
                type="text"
                placeholder="Género"
                label="otro"
                // onChange={(e) => {
                //   setValues({ ...values, gender: e.target.value });
                //   console.log("Updated values:", values);
                // }}
              />
            )}
          </div>

          <div className="input-group">
            <FormInput
              id="talent"
              type="select"
              placeholder="Talento"
              label="TALENTO"
              options={[
                "Bailarín",
                "Actor (con o sin formación)",
                "Modelo (con o sin formación)",
                "Pintor",
                "Cantante",
                "Locutor",
                "Voice Over",
                "Presentador",
                "Deportista",
                "Fitness",
                "Chef",
                "Barman",
                "Barista",
                "Creador de Contenido",
                "Otro",
              ]}
              required={true}
              onChange={(e) => {
                setValues({ ...values, talent: e.target.value });
                console.log("Updated values:", values);
              }}
            />
            {values.talent.toLowerCase() === "otro" && (
              <FormInput
                id="other_talent"
                type="text"
                placeholder=""
                label="otro"
                // onChange={(e) => {
                //   setValues({ ...values, gender: e.target.value });
                //   console.log("Updated values:", values);
                // }}
              />
            )}
          </div>

          <div className="input-group">
            <FormInput
              id="pet"
              type="select"
              placeholder="Mascota"
              label="MASCOTA"
              options={["Gato", "Perro", "otro"]}
              required={true}
              onChange={(e) => {
                setValues({ ...values, pet: e.target.value });
                console.log("Updated values:", values);
              }}
            />
            {values.pet === "otro" && (
              <FormInput
                id="other_pet"
                type="text"
                placeholder=""
                label="otro"
                // onChange={(e) => {
                //   setValues({ ...values, gender: e.target.value });
                //   console.log("Updated values:", values);
                // }}
              />
            )}
          </div>

          <FormInput
            id="file"
            type="file"
            label="GÉNERO"
            required={true}
            accept="png, jpg, webp"
            onChange={handleFileChange}
          />

          <FormInput
            id="video"
            type="file"
            label="VIDEO"
            required={true}
            accept="video/*"
            onChange={handleFileChange}
          />

          {/* {inputs.map((input) => (
            <FormInput key={input.id} {...input} />
          ))} */}
          <button type="submit">Enviar</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default App;
