import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

function Predictions({ pred }) {
  if (!pred || !pred.prediction) {
    return null;
  }

  return (
    <div className="flex flex-col bg-transparent mt-4 h-auto">
      <Typography
        variant="h1"
        fontSize="35px"
        color="secondary"
        textAlign="center"
        fontFamily="serif"
      >
        Predictions
      </Typography>
      <hr className="w-auto mx-5" />
      <div className="grid grid-cols-3 grid-rows-2 mt-2 gap-4 p-4 backdrop-blur-2xl">
        <Card
          className="row-span-2 h-full"
          variant="outlined"
          color="primary"
          size="lg"
          style={{ backgroundColor: "rgba(0,0,0,0.1)", borderColor: "black" }}
        >
          <CardContent>
            <Typography
              level="title-lg"
              className="bg-orange-100 rounded-md text-center"
            >
              <u>Workout</u>
            </Typography>

            <Typography level="body-md" fontSize="18px">
              <ol className="list-decimal">
                {pred.prediction.Workout.map((item, index) => (
                  <li className="ml-2 mt-2 text-black" key={index}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </li>
                ))}
              </ol>
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="h-full"
          variant="outlined"
          color="success"
          size="lg"
          style={{ backgroundColor: "rgba(0,0,0,0.1)", borderColor: "black" }}
        >
          <CardContent>
            <Typography
              level="title-lg"
              className="bg-orange-100 rounded-md text-center"
            >
              <u>Disease</u>
            </Typography>
            <Typography
              color="danger"
              level="body-md"
              fontSize="18px"
              className="animate-pulse"
            >
              {pred.prediction.Disease.toUpperCase()}
            </Typography>
            <Typography level="body-sm" fontSize="16px" textColor="black">
              {pred.prediction.Description}
            </Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          color="primary"
          size="lg"
          style={{ backgroundColor: "rgba(0,0,0,0.1)", borderColor: "black" }}
        >
          <CardContent>
            <Typography
              level="title-lg"
              className="bg-orange-100 rounded-md text-center"
            >
              <u>Medications</u>
            </Typography>
            <Typography level="body-md" fontSize="18px">
              <ol className="list-decimal">
                {pred.prediction.Medications.map((item, index) => (
                  <li className="ml-2 mt-2 text-black" key={index}>
                    {item}
                  </li>
                ))}
              </ol>
            </Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          color="primary"
          size="lg"
          style={{ backgroundColor: "rgba(0,0,0,0.1)", borderColor: "black" }}
        >
          <CardContent>
            <Typography
              level="title-lg"
              className="bg-orange-100 rounded-md text-center"
            >
              <u>Precautions</u>
            </Typography>

            <Typography level="body-md" fontSize="18px">
              <ol className="list-decimal">
                {pred.prediction.Precautions.map((item, index) => (
                  <li className="ml-2 mt-2 text-black" key={index}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </li>
                ))}
              </ol>
            </Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          color="primary"
          size="lg"
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            borderColor: "black",
          }}
        >
          <CardContent>
            <Typography
              level="title-lg"
              className="bg-orange-100 rounded-md text-center"
            >
              <u>Diet</u>
            </Typography>

            <Typography level="body-md" fontSize="18px">
              <ol className="list-decimal">
                {pred.prediction.Diet.map((item, index) => (
                  <li className="ml-2 mt-2 text-black" key={index}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </li>
                ))}
              </ol>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Predictions;
