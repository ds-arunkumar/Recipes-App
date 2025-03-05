const testController = {
  testGet: (req, res) => {
    res.json({ message: "Hello World!" });
  },
  testPost: (req, res) => {
    res.json({ message: "Hello Post!" });
  },
  testPut: (req, res) => {
    res.json({ message: "Hello Put!" });
  },
  testDelete: (req, res) => {
    res.json({ message: "Hello Delete!" });
  },
};
module.exports = testController;
