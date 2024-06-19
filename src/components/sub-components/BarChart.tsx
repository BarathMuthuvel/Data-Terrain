import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataType {
  month: string;
  value: number;
}

const BarChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const data: DataType[] = [
      { month: "Jan", value: 1000 },
      { month: "Feb", value: 2000 },
      { month: "Mar", value: 3000 },
      { month: "Apr", value: 4000 },
      { month: "May", value: 3000 },
      { month: "Jun", value: 2000 },
      { month: "Jul", value: 1000 },
      { month: "Aug", value: 2000 },
      { month: "Sep", value: 3000 },
      { month: "Oct", value: 4000 },
      { month: "Nov", value: 3000 },
      { month: "Dec", value: 2000 },
    ];

    const margin = { top: 30, right: 30, bottom: 70, left: 60 };
    const width = 750 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.month))
      .padding(0.2);

    const y = d3.scaleLinear().domain([0, 4000]).range([height, 0]);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g").call(d3.axisLeft(y).tickValues([0, 1000, 2000, 3000, 4000]));

    g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.month)!)
      .attr("y", (d) => y(0)) 
      .attr("width", x.bandwidth())

      .attr("height", 0) 
      .attr("fill", "#277ACC")
      .transition() 
      .duration(1500) 
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => height - y(d.value)); 

    const line = d3
      .line<DataType>()
      .x((d) => x(d.month)! + x.bandwidth() / 2) 
      .y((d) => y(d.value));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#002B55")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, []);

  return (
    <div>
      <svg ref={svgRef} width={800} height={300}></svg>
    </div>
  );
};

export default BarChart;
