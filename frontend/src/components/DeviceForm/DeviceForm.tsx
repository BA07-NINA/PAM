import { useForm } from "@tanstack/react-form";

function DeviceForm() {
  const form = useForm({
    defaultValues: {
      country: "",
      site: "",
      date: "",
      time: "",
      latitude: "",
      longitude: "",
      coordUncertainty: "",
      gpsDevice: "",
      deviceId: "",
      deploymentId: "",
      micHeight: "",
      micDirection: "",
      habitat: "",
      score: "",
      protocolChecklist: "",
      email: "",
      comment: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <h1>OVERSKRIFT</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <form.Field
          name="country"
          children={(field) => (
            <div>
              <label htmlFor="country">Country:</label>
              <input
                id="country"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="site"
          children={(field) => (
            <div>
              <label htmlFor="site">Site:</label>
              <input
                id="site"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="date"
          children={(field) => (
            <div>
              <label htmlFor="date">Date:</label>
              <input
                id="date"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="time"
          children={(field) => (
            <div>
              <label htmlFor="time">Time:</label>
              <input
                id="time"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="latitude"
          children={(field) => (
            <div>
              <label htmlFor="latitude">Latitude:</label>
              <input
                id="latitude"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="longitude"
          children={(field) => (
            <div>
              <label htmlFor="longitude">Longitude:</label>
              <input
                id="longitude"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="coordUncertainty"
          children={(field) => (
            <div>
              <label htmlFor="coordUncertainty">Coordinate Uncertainty:</label>
              <input
                id="coordUncertainty"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />

        <form.Field
          name="gpsDevice"
          children={(field) => (
            <div>
              <label htmlFor="gpsDevice">GPS device:</label>
              <input
                id="gpsDevice"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />

        <form.Field
          name="deviceId"
          children={(field) => (
            <div>
              <label htmlFor="deviceId">Device ID:</label>
              <input
                id="deviceId"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />

        <form.Field
          name="deploymentId"
          children={(field) => (
            <div>
              <label htmlFor="deploymentId">Deployment ID:</label>
              <input
                id="deploymentId"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        /> 

        <form.Field
          name="micHeight"
          children={(field) => (
            <div>
              <label htmlFor="micHeight">Microphone Height:</label>
              <input
                id="migHeigh"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        /> 

        <form.Field
          name="micDirection"
          children={(field) => (
            <div>
              <label htmlFor="micDirection">Microphone Direction:</label>
              <input
                id="micDirection"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />     

        <form.Field
          name="habitat"
          children={(field) => (
            <div>
              <label htmlFor="habitat">Habitat:</label>
              <input
                id="habitat"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />  

        <form.Field
          name="score"
          children={(field) => (
            <div>
              <label htmlFor="score">Score:</label>
              <input
                id="score"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />

        <form.Field
          name="protocolChecklist"
          children={(field) => (
            <div>
              <label htmlFor="protocolChecklist">Protocol Checklist:</label>
              <input
                id="protocolChecklist"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />

        <form.Field
          name="email"
          children={(field) => (
            <div>
              <label htmlFor="email">Adresse e-mail:</label>
              <input
                id="email"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />

        <form.Field
          name="comment"
          children={(field) => (
            <div>
              <label htmlFor="comment">Comment:</label>
              <input
                id="comment"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />

        <button onClick={form.handleSubmit} type="submit">
          Send inn
        </button>
      </div>
    </form>
  );
}
export default DeviceForm;
