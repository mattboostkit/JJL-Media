import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const ServiceCard = ({
  title = "Service Title",
  description = "A brief description of the service we provide to help businesses grow and succeed.",
  icon = <ArrowRight className="h-6 w-6" />,
  onClick = () => {},
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="w-[350px] h-[400px] bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <span className="mr-2">Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
