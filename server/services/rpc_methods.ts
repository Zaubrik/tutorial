export function getGraphData() {
  return {
    nodes: [
      { id: "Mathematics", group: "1" },
      { id: "Physics", group: "1" },
      { id: "Nuclear Physics", group: "2" },
      { id: "Chemistry", group: "2" },
      { id: "Biology", group: "2" },
      { id: "Material Science", group: "2" },
      { id: "Computer Science", group: "3" },
    ],
    links: [
      { source: "Mathematics", target: "Physics", value: 1 },
      { source: "Mathematics", target: "Computer Science", value: 8 },
      { source: "Physics", target: "Nuclear Physics", value: 10 },
      { source: "Physics", target: "Chemistry", value: 6 },
      { source: "Physics", target: "Biology", value: 1 },
      { source: "Physics", target: "Material Science", value: 1 },
    ],
  };
}

export async function _storeGraphData(data: Record<string, any>) {
  return { success: true };
}
