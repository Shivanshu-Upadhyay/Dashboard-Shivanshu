import React from "react";
import BasicContainer from "../Container/BasicContainer";
import AddNewTreatment from "../Forms/AddNewTreatment";

function AddNewTreatmentCategory() {
  const categories = [
    "Electrical Modalities",
    "Thermal Modalities",
    "Non Thermal Modalities",
    "Manual Therapy",
    "Alternative Therapy",
    "Re-Education",
  ];

  const data = {
    "Electrical Modalities": [
      "Transcutaneous Electrical Nerve Stimulation (TENS)",
      "Interferential Therapy (IFT)",
      "Neuromuscular Electrical Stimulation (NMES)",
      "Functional Electrical Stimulation (FES)",
      "Faradic Stimulation",
      "Iontophoresis",
      "Highly Voltage Pulsed Galvanic Stimulation (HVPGS)",
      "Low Intensity Direct Current (LIDC) and Pulsed LIDC",
      "Twin Peak Monophasic Stimulation",
      "Diadynamic Therapy",
      "H Wave Therapy : Action Potential System",
      "Russian Stimulation : Medium Frequency Stimulation",
      "Rebox Therapy; Scenar Therapy",
      "Micro current Therapy",
    ],
    "Thermal Modalities": [
      "Infra Red Radiation (IRR)",
      "Microwave Diatheramy (MWD)",
      "Short Wave Diatheramy (SWD)",
      "Wax Therapy",
      "Hydrocollatoral Packs",
      "Therapeutic Ultrasound",
      "Fluidotherapy",
      "Laser Therapy",
    ],
    "Non Thermal Modalities": [
      "Pulsed Ultrasound",
      "Low Intensity Pulsed Ultrasound (LIPUS)",
      "(Pulsed) Shortwave Therapy",
      "(Pulsed) Laser Therapy",
      "(Pulsed) Microwave Therapy",
      "Pulsed Electro-Magnetic Field Therapy (PEMF)",
      "Magnetic Therapies",
      "Pulsed Magnetic Therapies",
      "Static Magnetic Therapy",
      "Cryotherapy",
    ],
    "Manual Therapy": [""],
    "Alternative Therapy": [
      "Cupping Therapy ",
      "Dry Needling",
      "KinesioTaping",
    ],
    "Re-Education": [
      "Neuro-muscular Re-education",
      "Gait training",
      "Cardiopulmonary exercise program",
    ],
  };

  const [treatment, setTreatment] = React.useState("");

  return (
    <AddNewTreatment
      categories={categories}
      setTreatment={setTreatment}
      treatment={data[treatment] || []}
    />
  );
}

export default AddNewTreatmentCategory;
