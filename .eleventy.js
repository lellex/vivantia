const eleventyGoogleFonts = require("eleventy-google-fonts");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

  eleventyConfig.addPlugin(eleventyGoogleFonts);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },

    templateFormats: ["njk", "md", "html"],

    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};