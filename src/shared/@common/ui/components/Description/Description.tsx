interface DescriptionProps {
  text: string;
}

const Description = ({ text }: DescriptionProps) => {
  return (
    <p className="description" style={{}}>
      {text}
    </p>
  );
};

export default Description;
