import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dispatch, SetStateAction } from "react";

interface Props {
  values: string[];
  setValue: Dispatch<SetStateAction<string>>;
  defaultValue: string;
}
const RadioSelectionField = ({ values, setValue, defaultValue }: Props) => {
  const handler = (e: string) => {
    setValue(e);
  };
  return (
    <RadioGroup
      onValueChange={handler}
      className="w-4/5 ml-auto"
      defaultValue={defaultValue}
    >
      {values.map((value: string) => (
        <div key={value} className="flex items-center space-x-2">
          <RadioGroupItem value={value} id={value} />
          <Label className="cursor-pointer" htmlFor={value}>
            {value}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioSelectionField;
