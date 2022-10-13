import { client } from "../utils/SanityClient";
import {
  Additional,
  TimeItem,
  Shared,
} from "../Components/Expeience_Educarion/Shared";

type Props = {
  education: {
    EndDate: string;
    StartDate: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    course: string;
    institution: string;
  }[];
};

const Education = ({ education }: Props) => {
  return (
    <Shared ADD={<Additional text="Always Learning" />}>
      {education.map((item) => (
        <TimeItem
          key={item._id}
          course={item.course}
          endDate={item.EndDate}
          startDate={item.StartDate}
          institution={item.institution}
        />
      ))}
    </Shared>
  );
};

export default Education;

export const getStaticProps = async () => {
  const education = await client.fetch(
    `*[_type=='Education'] | order(StartDate) {
  EndDate,
StartDate,
course,
institution,
_id
} `
  );
  return {
    props: {
      education,
    },
  };
};
