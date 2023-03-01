import { Config, SectionType } from "../../types";

interface TreeNode {
  name: string;
  children: TreeNode[];
  parent?: TreeNode;
  depth: number;
}

export function parseTree(text: string): TreeNode {
  const tabWidth = 4;
  const lines = text.split("\n");
  const nodeStack = [];
  const root: TreeNode = {
    name: "root",
    children: [],
    depth: -1,
  };
  nodeStack.push(root);
  for (let i = 0; i < lines.length; i++) {
    const space = lines[i].split(/\S/)[0].length;
    let node: TreeNode = {
      name: lines[i].trim(),
      children: [],
      depth: Math.floor(space / tabWidth),
    };
    while (node.depth <= nodeStack[nodeStack.length - 1].depth) {
      nodeStack.pop();
    }
    if (node.depth > nodeStack[nodeStack.length - 1].depth) {
      nodeStack[nodeStack.length - 1].children.push(node);
    }
    nodeStack.push(node);
  }
  return root;
}

export function treeResolver(root: TreeNode) {
  if (root === null) {
    return;
  }
  for (let i = 0; i < root.children.length; i++) {
    if (root.children[i].name === "config") {
      configResolver(root.children[i]);
    }
    if (root.children[i].name === "content") {
      contentResolver(root.children[i]);
    }
  }
}

export function configResolver(config: TreeNode) {
  let resolvedConfig: any = {};
  if (config === null) {
    return;
  }
  for (let i = 0; i < config.children.length; i++) {
    let key = config.children[i].name.split(" ")[0];
    let value = config.children[i].name.split(" ")[1];
    if (config.children[i].children.length === 0) {
      resolvedConfig[key] = value;
    } else {
      if(key === 'contacts'){
        resolvedConfig[key] = config.children[i].children.map((e) => ({
          name : e.name.split(" ")[0],
          value : e.name.split(" ")[1]
        }));
      }else{
        resolvedConfig[key] = config.children[i].children.map((e) => e.name);
      }
      
    }
  }
  console.log(resolvedConfig);
  return resolvedConfig;
}

export function contentResolver(content: TreeNode) {
  let resolvedContent: any[] = [];
  if (content === null) {
    return;
  }
  for (let i = 0; i < content.children.length; i++) {
    let section: any = {
      title: "",
      childList: [],
      tableList: [],
    };
    let key = content.children[i].name.split(" ")[0];
    let value = content.children[i].name.split(" ")[1];
    section[key] = value;
    for (let j = 0; j < content.children[i].children.length; j++) {
      section.chileList;
      if (content.children[i].children[j].name === "table") {
        section.tableList = content.children[i].children[j].children?.map(
          (e: { name: string }) => e.name
        );
      }
      if (content.children[i]?.children[j].name === "p") {
        section.childList.push({
          name: "p",
          value: content.children[i].children[j].children?.map(
            (e: { name: string }) => e.name
          ),
        });
      }
      if (content.children[i]?.children[j].name === "h") {
        section.childList.push({
          name: "h",
          value: content.children[i].children[j].children?.map(
            (e: { name: string }) => e.name
          ),
        });
      }
    }
    resolvedContent.push(section);
  }
  return resolvedContent;
}
