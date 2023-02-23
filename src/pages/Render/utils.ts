interface TreeNode {
    name: string;
    children: TreeNode[];
    parent?: TreeNode;
    depth: number;
  }
  
 export function parseTree(text: string): TreeNode {
    const tabWidth = 4
    const lines = text.split("\n");
    const nodeStack = []
    const root: TreeNode = {
      name: 'root',
      children: [],
      depth : -1
    };
    nodeStack.push(root);
    for (let i = 0; i < lines.length; i++) {
        const space = lines[i].split(/\S/)[0].length
        let node: TreeNode = {
            name: lines[i].trim(),
            children: [],
            depth : Math.floor(space / tabWidth)
        }
        while(node.depth <= nodeStack[nodeStack.length - 1].depth){
            nodeStack.pop()
        }
        if(node.depth > nodeStack[nodeStack.length - 1].depth){
            nodeStack[nodeStack.length - 1].children.push(node)

        }   
        nodeStack.push(node)
    }
    return root;
  }
  