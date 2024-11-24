import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {ProjectDataType} from "@/app/lib/definitions"
export default function ProjectCard( {project}:{project:ProjectDataType}) {
  return (
    <Card className="w-[400px] h-max md:h-[200px] bg-gray-500 backdrop-blur-md bg-opacity-5 border-small border-white border-opacity-10">
      <CardHeader className="flex gap-3 text-white">
       
        <div className="flex flex-col">
          <p className="text-md ">{project.Title}</p>
          <p className="text-small text-gray-300">{project.Domain}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className=" text-gray-300 text-small">{project.Description}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={project.Link}
          isDisabled={project.Link===""}
        >
                    {project.Title==="Website for Bugsmirror Research Pvt Ltd" || project.Title==="Admin Portal for Bugsmirror Research Pvt Ltd"?"Visit website": "Visit source code on GitHub."}
          
        </Link>
      </CardFooter>
    </Card>
  );
}