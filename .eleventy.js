const eleventyGoogleFonts = require("eleventy-google-fonts");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

  eleventyConfig.addPlugin(eleventyGoogleFonts);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },

    templateFormats: ["njk", "md", "html"],

    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};