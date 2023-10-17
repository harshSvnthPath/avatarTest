import { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import { Button, Stack } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

type Props = {};

export default function CapturePhoto(props: Props) {
  const webcamRef = useRef<Webcam | null>(null);

  const videoConstraints = {
    facingMode: "user",
  };

  const { control, setValue, watch, resetField } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();

    append(imageSrc);
  }, []);

  return (
    <Stack>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />

      <Button onClick={captureImage} variant="contained">
        Capture
      </Button>
    </Stack>
  );
}
