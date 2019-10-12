import React, { useState } from 'react';

import Title from '../../shared/Title';
import Section from '../../shared/Section';
import Grid from '../../shared/Grid';
import '../../shared/Link/Link.css';
import VariantsLink from '../../shared/VariantsLink';
import '../../shared/VariantsBox/VariantsBox.css';
import './LarinVariants.css';

const LarinVariants = () => {
    const [areVariantsAll, setAreVariantsAll] = useState(false);
    
    return (
        <Section className="LarinVariants">
            <Title>
                <span class="LarinVariants-TitleWord1">Все варианты </span>
                <span class="LarinVariants-TitleWord2">Александра&nbsp;</span>
                <span class="LarinVariants-TitleWord3">Ларина</span>
                <span className="Title-Caption">с 2013 года</span>
            </Title>

            <p className="Section-Desc LarinVariants-Desc_desktop">
                Для тех, кто ищет варианты посложнее, чем обычно предлагают на ЕГЭ,
                публикуем задания с развернутым ответом из тренировочных вариантов
                А.<span class="halfspace">&nbsp;</span>А. Ларина. Новые условия
                по субботам, решения по пятницам.
            </p>

            <div className="VariantsBox">
                <Grid className={`Variants LarinVariants-Variants ${!areVariantsAll && 'LarinVariants-Variants_cut'}`}>
                    <VariantsLink className="VariantsLink_new" to="/test?id=25167677" title="Александр Ларин, тренировочный вариант ЕГЭ № 281">281</VariantsLink>
                    <VariantsLink to="/test?id=25097380" title="Александр Ларин, тренировочный вариант ЕГЭ № 280">280</VariantsLink>
                    <VariantsLink to="/test?id=25018415" title="Александр Ларин, тренировочный вариант ЕГЭ № 279">279</VariantsLink>
                    <VariantsLink to="/test?id=24968450" title="Александр Ларин, тренировочный вариант ЕГЭ № 278">278</VariantsLink>
                    <VariantsLink to="/test?id=25079063" title="Александр Ларин, тренировочный вариант ЕГЭ № 277">277</VariantsLink>
                    <VariantsLink to="/test?id=25078751" title="Александр Ларин, тренировочный вариант ЕГЭ № 276">276</VariantsLink>
                    <VariantsLink to="/test?id=25077789" title="Александр Ларин, тренировочный вариант ЕГЭ № 275">275</VariantsLink>
                    <VariantsLink to="/test?id=25076524" title="Александр Ларин, тренировочный вариант ЕГЭ № 274">274</VariantsLink>
                    <VariantsLink to="/test?id=25076523" title="Александр Ларин, тренировочный вариант ЕГЭ № 273">273</VariantsLink>
                    <VariantsLink to="/test?id=25075597" title="Александр Ларин, тренировочный вариант ЕГЭ № 272">272</VariantsLink>
                    <VariantsLink to="/test?id=25075173" title="Александр Ларин, тренировочный вариант ЕГЭ № 271">271</VariantsLink>
                    <VariantsLink to="/test?id=25074210" title="Александр Ларин, тренировочный вариант ЕГЭ № 270">270</VariantsLink>
                    <VariantsLink to="/test?id=25072939" title="Александр Ларин, тренировочный вариант ЕГЭ № 269">269</VariantsLink>
                    <VariantsLink to="/test?id=25072473" title="Александр Ларин, тренировочный вариант ЕГЭ № 268">268</VariantsLink>
                    <VariantsLink to="/test?id=25072048" title="Александр Ларин, тренировочный вариант ЕГЭ № 267">267</VariantsLink>
                    <VariantsLink to="/test?id=25055175" title="Александр Ларин, тренировочный вариант ЕГЭ № 266">266</VariantsLink>
                    <VariantsLink to="/test?id=25054128" title="Александр Ларин, тренировочный вариант ЕГЭ № 265">265</VariantsLink>
                    <VariantsLink to="/test?id=25052022" title="Александр Ларин, тренировочный вариант ЕГЭ № 264">264</VariantsLink>
                    <VariantsLink to="/test?id=25041826" title="Александр Ларин, тренировочный вариант ЕГЭ № 263">263</VariantsLink>
                    <VariantsLink to="/test?id=25041821" title="Александр Ларин, тренировочный вариант ЕГЭ № 262">262</VariantsLink>
                    <VariantsLink to="/test?id=25041156" title="Александр Ларин, тренировочный вариант ЕГЭ № 261">261</VariantsLink>
                    <VariantsLink to="/test?id=25040144" title="Александр Ларин, тренировочный вариант ЕГЭ № 260">260</VariantsLink>
                    <VariantsLink to="/test?id=25039179" title="Александр Ларин, тренировочный вариант ЕГЭ № 259">259</VariantsLink>
                    <VariantsLink to="/test?id=25037148" title="Александр Ларин, тренировочный вариант ЕГЭ № 258">258</VariantsLink>
                    <VariantsLink to="/test?id=25020133" title="Александр Ларин, тренировочный вариант ЕГЭ № 257">257</VariantsLink>
                    <VariantsLink to="/test?id=25020025" title="Александр Ларин, тренировочный вариант ЕГЭ № 256">256</VariantsLink>
                    <VariantsLink to="/test?id=25003245" title="Александр Ларин, тренировочный вариант ЕГЭ № 255">255</VariantsLink>
                    <VariantsLink to="/test?id=25002839" title="Александр Ларин, тренировочный вариант ЕГЭ № 254">254</VariantsLink>
                    <VariantsLink to="/test?id=24980172" title="Александр Ларин, тренировочный вариант ЕГЭ № 253">253</VariantsLink>
                    <VariantsLink to="/test?id=24979083" title="Александр Ларин, тренировочный вариант ЕГЭ № 252">252</VariantsLink>
                    <VariantsLink to="/test?id=24977494" title="Александр Ларин, тренировочный вариант ЕГЭ № 251">251</VariantsLink>
                    <VariantsLink to="/test?id=24976123" title="Александр Ларин, тренировочный вариант ЕГЭ № 250">250</VariantsLink>
                    <VariantsLink to="/test?id=24950347" title="Александр Ларин, тренировочный вариант ЕГЭ № 249">249</VariantsLink>
                    <VariantsLink to="/test?id=24949907" title="Александр Ларин, тренировочный вариант ЕГЭ № 248">248</VariantsLink>
                    <VariantsLink to="/test?id=24949280" title="Александр Ларин, тренировочный вариант ЕГЭ № 247">247</VariantsLink>
                    <VariantsLink to="/test?id=24947972" title="Александр Ларин, тренировочный вариант ЕГЭ № 246">246</VariantsLink>
                    <VariantsLink to="/test?id=24936000" title="Александр Ларин, тренировочный вариант ЕГЭ № 245">245</VariantsLink>
                    <VariantsLink to="/test?id=24935314" title="Александр Ларин, тренировочный вариант ЕГЭ № 244">244</VariantsLink>
                    <VariantsLink to="/test?id=24933844" title="Александр Ларин, тренировочный вариант ЕГЭ № 243">243</VariantsLink>
                    <VariantsLink to="/test?id=24931928" title="Александр Ларин, тренировочный вариант ЕГЭ № 242">242</VariantsLink>
                    <VariantsLink to="/test?id=24915540" title="Александр Ларин, тренировочный вариант ЕГЭ № 241">241</VariantsLink>
                    <VariantsLink to="/test?id=24910259" title="Александр Ларин, тренировочный вариант ЕГЭ № 240">240</VariantsLink>
                    <VariantsLink to="/test?id=20109276" title="Александр Ларин, тренировочный вариант ЕГЭ № 239">239</VariantsLink>
                    <VariantsLink to="/test?id=20108133" title="Александр Ларин, тренировочный вариант ЕГЭ № 238">238</VariantsLink>
                    <VariantsLink to="/test?id=20107404" title="Александр Ларин, тренировочный вариант ЕГЭ № 237">237</VariantsLink>
                    <VariantsLink to="/test?id=20061471" title="Александр Ларин, тренировочный вариант ЕГЭ № 236">236</VariantsLink>
                    <VariantsLink to="/test?id=20060717" title="Александр Ларин, тренировочный вариант ЕГЭ № 235">235</VariantsLink>
                    <VariantsLink to="/test?id=20059859" title="Александр Ларин, тренировочный вариант ЕГЭ № 234">234</VariantsLink>
                    <VariantsLink to="/test?id=20058652" title="Александр Ларин, тренировочный вариант ЕГЭ № 233">233</VariantsLink>
                    <VariantsLink to="/test?id=20057824" title="Александр Ларин, тренировочный вариант ЕГЭ № 232">232</VariantsLink>
                    <VariantsLink to="/test?id=20039753" title="Александр Ларин, тренировочный вариант ЕГЭ № 231">231</VariantsLink>
                    <VariantsLink to="/test?id=20038536" title="Александр Ларин, тренировочный вариант ЕГЭ № 230">230</VariantsLink>
                    <VariantsLink to="/test?id=20038066" title="Александр Ларин, тренировочный вариант ЕГЭ № 229">229</VariantsLink>
                    <VariantsLink to="/test?id=20022259" title="Александр Ларин, тренировочный вариант ЕГЭ № 228">228</VariantsLink>
                    <VariantsLink to="/test?id=20021873" title="Александр Ларин, тренировочный вариант ЕГЭ № 227">227</VariantsLink>
                    <VariantsLink to="/test?id=20021616" title="Александр Ларин, тренировочный вариант ЕГЭ № 226">226</VariantsLink>
                    <VariantsLink to="/test?id=20021244" title="Александр Ларин, тренировочный вариант ЕГЭ № 225">225</VariantsLink>
                    <VariantsLink to="/test?id=20020780" title="Александр Ларин, тренировочный вариант ЕГЭ № 224">224</VariantsLink>
                    <VariantsLink to="/test?id=20020323" title="Александр Ларин, тренировочный вариант ЕГЭ № 223">223</VariantsLink>
                    <VariantsLink to="/test?id=20019568" title="Александр Ларин, тренировочный вариант ЕГЭ № 222">222</VariantsLink>
                    <VariantsLink to="/test?id=19958124" title="Александр Ларин, тренировочный вариант ЕГЭ № 221">221</VariantsLink>
                    <VariantsLink to="/test?id=19957854" title="Александр Ларин, тренировочный вариант ЕГЭ № 220">220</VariantsLink>
                    <VariantsLink to="/test?id=19957607" title="Александр Ларин, тренировочный вариант ЕГЭ № 219">219</VariantsLink>
                    <VariantsLink to="/test?id=19957047" title="Александр Ларин, тренировочный вариант ЕГЭ № 218">218</VariantsLink>
                    <VariantsLink to="/test?id=19936869" title="Александр Ларин, тренировочный вариант ЕГЭ № 217">217</VariantsLink>
                    <VariantsLink to="/test?id=19935947" title="Александр Ларин, тренировочный вариант ЕГЭ № 216">216</VariantsLink>
                    <VariantsLink to="/test?id=19935419" title="Александр Ларин, тренировочный вариант ЕГЭ № 215">215</VariantsLink>
                    <VariantsLink to="/test?id=19935033" title="Александр Ларин, тренировочный вариант ЕГЭ № 214">214</VariantsLink>
                    <VariantsLink to="/test?id=19934153" title="Александр Ларин, тренировочный вариант ЕГЭ № 213">213</VariantsLink>
                    <VariantsLink to="/test?id=19921198" title="Александр Ларин, тренировочный вариант ЕГЭ № 212">212</VariantsLink>
                    <VariantsLink to="/test?id=19920828" title="Александр Ларин, тренировочный вариант ЕГЭ № 211">211</VariantsLink>
                    <VariantsLink to="/test?id=19920436" title="Александр Ларин, тренировочный вариант ЕГЭ № 210">210</VariantsLink>
                    <VariantsLink to="/test?id=19919734" title="Александр Ларин, тренировочный вариант ЕГЭ № 209">209</VariantsLink>
                    <VariantsLink to="/test?id=19919099" title="Александр Ларин, тренировочный вариант ЕГЭ № 208">208</VariantsLink>
                    <VariantsLink to="/test?id=19904450" title="Александр Ларин, тренировочный вариант ЕГЭ № 207">207</VariantsLink>
                    <VariantsLink to="/test?id=19903861" title="Александр Ларин, тренировочный вариант ЕГЭ № 206">206</VariantsLink>
                    <VariantsLink to="/test?id=19903243" title="Александр Ларин, тренировочный вариант ЕГЭ № 205">205</VariantsLink>
                    <VariantsLink to="/test?id=19903156" title="Александр Ларин, тренировочный вариант ЕГЭ № 204">204</VariantsLink>
                    <VariantsLink to="/test?id=19885044" title="Александр Ларин, тренировочный вариант ЕГЭ № 203">203</VariantsLink>
                    <VariantsLink to="/test?id=19883815" title="Александр Ларин, тренировочный вариант ЕГЭ № 202">202</VariantsLink>
                    <VariantsLink to="/test?id=19881440" title="Александр Ларин, тренировочный вариант ЕГЭ № 201">201</VariantsLink>
                    <VariantsLink to="/test?id=24778393" title="Александр Ларин, тренировочный вариант ЕГЭ № 200">200</VariantsLink>
                    <VariantsLink to="/test?id=24778241" title="Александр Ларин, тренировочный вариант ЕГЭ № 199">199</VariantsLink>
                    <VariantsLink to="/test?id=24778155" title="Александр Ларин, тренировочный вариант ЕГЭ № 198">198</VariantsLink>
                    <VariantsLink to="/test?id=19798618" title="Александр Ларин, тренировочный вариант ЕГЭ № 197">197</VariantsLink>
                    <VariantsLink to="/test?id=19794124" title="Александр Ларин, тренировочный вариант ЕГЭ № 196">196</VariantsLink>
                    <VariantsLink to="/test?id=19794077" title="Александр Ларин, тренировочный вариант ЕГЭ № 195">195</VariantsLink>
                    <VariantsLink to="/test?id=19793939" title="Александр Ларин, тренировочный вариант ЕГЭ № 194">194</VariantsLink>
                    <VariantsLink to="/test?id=19793367" title="Александр Ларин, тренировочный вариант ЕГЭ № 193">193</VariantsLink>
                    <VariantsLink to="/test?id=19787721" title="Александр Ларин, тренировочный вариант ЕГЭ № 192">192</VariantsLink>
                    <VariantsLink to="/test?id=19786653" title="Александр Ларин, тренировочный вариант ЕГЭ № 191">191</VariantsLink>
                    <VariantsLink to="/test?id=19786598" title="Александр Ларин, тренировочный вариант ЕГЭ № 190">190</VariantsLink>
                    <VariantsLink to="/test?id=19786527" title="Александр Ларин, тренировочный вариант ЕГЭ № 189">189</VariantsLink>
                    <VariantsLink to="/test?id=19785871" title="Александр Ларин, тренировочный вариант ЕГЭ № 188">188</VariantsLink>
                    <VariantsLink to="/test?id=19784780" title="Александр Ларин, тренировочный вариант ЕГЭ № 187">187</VariantsLink>
                    <VariantsLink to="/test?id=19784723" title="Александр Ларин, тренировочный вариант ЕГЭ № 186">186</VariantsLink>
                    <VariantsLink to="/test?id=19784642" title="Александр Ларин, тренировочный вариант ЕГЭ № 185">185</VariantsLink>
                    <VariantsLink to="/test?id=19784534" title="Александр Ларин, тренировочный вариант ЕГЭ № 184">184</VariantsLink>
                    <VariantsLink to="/test?id=19784404" title="Александр Ларин, тренировочный вариант ЕГЭ № 183">183</VariantsLink>
                    <VariantsLink to="/test?id=19784090" title="Александр Ларин, тренировочный вариант ЕГЭ № 182">182</VariantsLink>
                    <VariantsLink to="/test?id=19764227" title="Александр Ларин, тренировочный вариант ЕГЭ № 181">181</VariantsLink>
                    <VariantsLink to="/test?id=19764226" title="Александр Ларин, тренировочный вариант ЕГЭ № 180">180</VariantsLink>
                    <VariantsLink to="/test?id=19764225" title="Александр Ларин, тренировочный вариант ЕГЭ № 179">179</VariantsLink>
                    <VariantsLink to="/test?id=19757914" title="Александр Ларин, тренировочный вариант ЕГЭ № 178">178</VariantsLink>
                    <VariantsLink to="/test?id=19757905" title="Александр Ларин, тренировочный вариант ЕГЭ № 177">177</VariantsLink>
                    <VariantsLink to="/test?id=19755386" title="Александр Ларин, тренировочный вариант ЕГЭ № 176">176</VariantsLink>
                    <VariantsLink to="/test?id=19755368" title="Александр Ларин, тренировочный вариант ЕГЭ № 175">175</VariantsLink>
                    <VariantsLink to="/test?id=19755137" title="Александр Ларин, тренировочный вариант ЕГЭ № 174">174</VariantsLink>
                    <VariantsLink to="/test?id=19752393" title="Александр Ларин, тренировочный вариант ЕГЭ № 173">173</VariantsLink>
                    <VariantsLink to="/test?id=19752231" title="Александр Ларин, тренировочный вариант ЕГЭ № 172">172</VariantsLink>
                    <VariantsLink to="/test?id=12125069" title="Александр Ларин, тренировочный вариант ЕГЭ № 171">171</VariantsLink>
                    <VariantsLink to="/test?id=12124969" title="Александр Ларин, тренировочный вариант ЕГЭ № 170">170</VariantsLink>
                    <VariantsLink to="/test?id=12046489" title="Александр Ларин, тренировочный вариант ЕГЭ № 169">169</VariantsLink>
                    <VariantsLink to="/test?id=12046322" title="Александр Ларин, тренировочный вариант ЕГЭ № 168">168</VariantsLink>
                    <VariantsLink to="/test?id=12041989" title="Александр Ларин, тренировочный вариант ЕГЭ № 167">167</VariantsLink>
                    <VariantsLink to="/test?id=12040841" title="Александр Ларин, тренировочный вариант ЕГЭ № 166">166</VariantsLink>
                    <VariantsLink to="/test?id=12040336" title="Александр Ларин, тренировочный вариант ЕГЭ № 165">165</VariantsLink>
                    <VariantsLink to="/test?id=11804839" title="Александр Ларин, тренировочный вариант ЕГЭ № 164">164</VariantsLink>
                    <VariantsLink to="/test?id=11804745" title="Александр Ларин, тренировочный вариант ЕГЭ № 163">163</VariantsLink>
                    <VariantsLink to="/test?id=11804579" title="Александр Ларин, тренировочный вариант ЕГЭ № 162">162</VariantsLink>
                    <VariantsLink to="/test?id=11804477" title="Александр Ларин, тренировочный вариант ЕГЭ № 161">161</VariantsLink>
                    <VariantsLink to="/test?id=11589358" title="Александр Ларин, тренировочный вариант ЕГЭ № 160">160</VariantsLink>
                    <VariantsLink to="/test?id=11589227" title="Александр Ларин, тренировочный вариант ЕГЭ № 159">159</VariantsLink>
                    <VariantsLink to="/test?id=11589144" title="Александр Ларин, тренировочный вариант ЕГЭ № 158">158</VariantsLink>
                    <VariantsLink to="/test?id=11588841" title="Александр Ларин, тренировочный вариант ЕГЭ № 157">157</VariantsLink>
                    <VariantsLink to="/test?id=11588672" title="Александр Ларин, тренировочный вариант ЕГЭ № 156">156</VariantsLink>
                    <VariantsLink to="/test?id=10436132" title="Александр Ларин, тренировочный вариант ЕГЭ № 155">155</VariantsLink>
                    <VariantsLink to="/test?id=10435952" title="Александр Ларин, тренировочный вариант ЕГЭ № 154">154</VariantsLink>
                    <VariantsLink to="/test?id=10435324" title="Александр Ларин, тренировочный вариант ЕГЭ № 153">153</VariantsLink>
                    <VariantsLink to="/test?id=10434986" title="Александр Ларин, тренировочный вариант ЕГЭ № 152">152</VariantsLink>
                    <VariantsLink to="/test?id=9981570" title="Александр Ларин, тренировочный вариант ЕГЭ № 151">151</VariantsLink>
                    <VariantsLink to="/test?id=9981231" title="Александр Ларин, тренировочный вариант ЕГЭ № 150">150</VariantsLink>
                    <VariantsLink to="/test?id=9980809" title="Александр Ларин, тренировочный вариант ЕГЭ № 149">149</VariantsLink>
                    <VariantsLink to="/test?id=9980157" title="Александр Ларин, тренировочный вариант ЕГЭ № 148">148</VariantsLink>
                    <VariantsLink to="/test?id=9979747" title="Александр Ларин, тренировочный вариант ЕГЭ № 147">147</VariantsLink>
                    <VariantsLink to="/test?id=9478422" title="Александр Ларин, тренировочный вариант ЕГЭ № 146">146</VariantsLink>
                    <VariantsLink to="/test?id=9478344" title="Александр Ларин, тренировочный вариант ЕГЭ № 145">145</VariantsLink>
                    <VariantsLink to="/test?id=9478237" title="Александр Ларин, тренировочный вариант ЕГЭ № 144">144</VariantsLink>
                    <VariantsLink to="/test?id=9478127" title="Александр Ларин, тренировочный вариант ЕГЭ № 143">143</VariantsLink>
                    <VariantsLink to="/test?id=9475740" title="Александр Ларин, тренировочный вариант ЕГЭ № 142">142</VariantsLink>
                    <VariantsLink to="/test?id=9061073" title="Александр Ларин, тренировочный вариант ЕГЭ № 141">141</VariantsLink>
                    <VariantsLink to="/test?id=9059837" title="Александр Ларин, тренировочный вариант ЕГЭ № 140">140</VariantsLink>
                    <VariantsLink to="/test?id=9052736" title="Александр Ларин, тренировочный вариант ЕГЭ № 139">139</VariantsLink>
                    <VariantsLink to="/test?id=8888686" title="Александр Ларин, тренировочный вариант ЕГЭ № 138">138</VariantsLink>
                    <VariantsLink to="/test?id=8888656" title="Александр Ларин, тренировочный вариант ЕГЭ № 137">137</VariantsLink>
                    <VariantsLink to="/test?id=8888598" title="Александр Ларин, тренировочный вариант ЕГЭ № 136">136</VariantsLink>
                    <VariantsLink to="/test?id=8888529" title="Александр Ларин, тренировочный вариант ЕГЭ № 135">135</VariantsLink>
                    <VariantsLink to="/test?id=8888516" title="Александр Ларин, тренировочный вариант ЕГЭ № 134">134</VariantsLink>
                    <VariantsLink to="/test?id=8888478" title="Александр Ларин, тренировочный вариант ЕГЭ № 133">133</VariantsLink>
                    <VariantsLink to="/test?id=8888449" title="Александр Ларин, тренировочный вариант ЕГЭ № 132">132</VariantsLink>
                    <VariantsLink to="/test?id=8554401" title="Александр Ларин, тренировочный вариант ЕГЭ № 131">131</VariantsLink>
                    <VariantsLink to="/test?id=8554397" title="Александр Ларин, тренировочный вариант ЕГЭ № 130">130</VariantsLink>
                    <VariantsLink to="/test?id=8554395" title="Александр Ларин, тренировочный вариант ЕГЭ № 129">129</VariantsLink>
                    <VariantsLink to="/test?id=8554392" title="Александр Ларин, тренировочный вариант ЕГЭ № 128">128</VariantsLink>
                    <VariantsLink to="/test?id=8554381" title="Александр Ларин, тренировочный вариант ЕГЭ № 127">127</VariantsLink>
                    <VariantsLink to="/test?id=8554373" title="Александр Ларин, тренировочный вариант ЕГЭ № 126">126</VariantsLink>
                    <VariantsLink to="/test?id=8554364" title="Александр Ларин, тренировочный вариант ЕГЭ № 125">125</VariantsLink>
                    <VariantsLink to="/test?id=8554351" title="Александр Ларин, тренировочный вариант ЕГЭ № 124">124</VariantsLink>
                    <VariantsLink to="/test?id=8554343" title="Александр Ларин, тренировочный вариант ЕГЭ № 123">123</VariantsLink>
                    <VariantsLink to="/test?id=8554317" title="Александр Ларин, тренировочный вариант ЕГЭ № 122">122</VariantsLink>
                    <VariantsLink to="/test?id=8554309" title="Александр Ларин, тренировочный вариант ЕГЭ № 121">121</VariantsLink>
                    <VariantsLink to="/test?id=8658826" title="Александр Ларин, тренировочный вариант ЕГЭ № 120">120</VariantsLink>
                    <VariantsLink to="/test?id=8648202" title="Александр Ларин, тренировочный вариант ЕГЭ № 119">119</VariantsLink>
                    <VariantsLink to="/test?id=8630633" title="Александр Ларин, тренировочный вариант ЕГЭ № 118">118</VariantsLink>
                    <VariantsLink to="/test?id=8630129" title="Александр Ларин, тренировочный вариант ЕГЭ № 117">117</VariantsLink>
                    <VariantsLink to="/test?id=8629549" title="Александр Ларин, тренировочный вариант ЕГЭ № 116">116</VariantsLink>
                    <VariantsLink to="/test?id=8628130" title="Александр Ларин, тренировочный вариант ЕГЭ № 115">115</VariantsLink>
                    <VariantsLink to="/test?id=8615106" title="Александр Ларин, тренировочный вариант ЕГЭ № 114">114</VariantsLink>
                    <VariantsLink to="/test?id=8599899" title="Александр Ларин, тренировочный вариант ЕГЭ № 113">113</VariantsLink>
                    <VariantsLink to="/test?id=8599074" title="Александр Ларин, тренировочный вариант ЕГЭ № 112">112</VariantsLink>
                    <VariantsLink to="/test?id=8482167" title="Александр Ларин, тренировочный вариант ЕГЭ № 111">111</VariantsLink>
                    <VariantsLink to="/test?id=6850445" title="Александр Ларин, тренировочный вариант ЕГЭ № 110">110</VariantsLink>
                    <VariantsLink to="/test?id=6594387" title="Александр Ларин, тренировочный вариант ЕГЭ № 109">109</VariantsLink>
                    <VariantsLink to="/test?id=6594129" title="Александр Ларин, тренировочный вариант ЕГЭ № 108">108</VariantsLink>
                    <VariantsLink to="/test?id=6519757" title="Александр Ларин, тренировочный вариант ЕГЭ № 107">107</VariantsLink>
                    <VariantsLink to="/test?id=6519598" title="Александр Ларин, тренировочный вариант ЕГЭ № 106">106</VariantsLink>
                    <VariantsLink to="/test?id=6519330" title="Александр Ларин, тренировочный вариант ЕГЭ № 105">105</VariantsLink>
                    <VariantsLink to="/test?id=6518900" title="Александр Ларин, тренировочный вариант ЕГЭ № 104">104</VariantsLink>
                    <VariantsLink to="/test?id=6518670" title="Александр Ларин, тренировочный вариант ЕГЭ № 103">103</VariantsLink>
                    <VariantsLink to="/test?id=6593453" title="Александр Ларин, тренировочный вариант ЕГЭ № 102">102</VariantsLink>
                    <VariantsLink to="/test?id=6593352" title="Александр Ларин, тренировочный вариант ЕГЭ № 101">101</VariantsLink>
                    <VariantsLink to="/test?id=6830103" title="Александр Ларин, тренировочный вариант ЕГЭ № 100">100</VariantsLink>
                    <VariantsLink to="/test?id=6518454" title="Александр Ларин, тренировочный вариант ЕГЭ № 99">99</VariantsLink>
                    <VariantsLink to="/test?id=6518152" title="Александр Ларин, тренировочный вариант ЕГЭ № 98">98</VariantsLink>
                    <VariantsLink to="/test?id=6518024" title="Александр Ларин, тренировочный вариант ЕГЭ № 97">97</VariantsLink>
                    <VariantsLink to="/test?id=6517802" title="Александр Ларин, тренировочный вариант ЕГЭ № 96">96</VariantsLink>
                    <VariantsLink to="/test?id=6508631" title="Александр Ларин, тренировочный вариант ЕГЭ № 95">95</VariantsLink>
                    <VariantsLink to="/test?id=6508615" title="Александр Ларин, тренировочный вариант ЕГЭ № 94">94</VariantsLink>
                    <VariantsLink to="/test?id=6508340" title="Александр Ларин, тренировочный вариант ЕГЭ № 93">93</VariantsLink>
                    <VariantsLink to="/test?id=6507881" title="Александр Ларин, тренировочный вариант ЕГЭ № 92">92</VariantsLink>
                    <VariantsLink to="/test?id=6506230" title="Александр Ларин, тренировочный вариант ЕГЭ № 91">91</VariantsLink>
                    <VariantsLink to="/test?id=6493435" title="Александр Ларин, тренировочный вариант ЕГЭ № 90">90</VariantsLink>
                    <VariantsLink to="/test?id=6781502" title="Александр Ларин, тренировочный вариант ЕГЭ № 89">89</VariantsLink>
                    <VariantsLink to="/test?id=6781050" title="Александр Ларин, тренировочный вариант ЕГЭ № 88">88</VariantsLink>
                    <VariantsLink to="/test?id=6492216" title="Александр Ларин, тренировочный вариант ЕГЭ № 87">87</VariantsLink>
                    <VariantsLink to="/test?id=6491231" title="Александр Ларин, тренировочный вариант ЕГЭ № 86">86</VariantsLink>
                    <VariantsLink to="/test?id=6605121" title="Александр Ларин, тренировочный вариант ЕГЭ № 85">85</VariantsLink>
                    <VariantsLink to="/test?id=6604995" title="Александр Ларин, тренировочный вариант ЕГЭ № 84">84</VariantsLink>
                    <VariantsLink to="/test?id=6490808" title="Александр Ларин, тренировочный вариант ЕГЭ № 83">83</VariantsLink>
                    <VariantsLink to="/test?id=6466306" title="Александр Ларин, тренировочный вариант ЕГЭ № 82">82</VariantsLink>
                    <VariantsLink to="/test?id=6604854" title="Александр Ларин, тренировочный вариант ЕГЭ № 81">81</VariantsLink>
                    <VariantsLink to="/test?id=5410469" title="Александр Ларин, тренировочный вариант ЕГЭ № 80">80</VariantsLink>
                    <VariantsLink to="/test?id=5410468" title="Александр Ларин, тренировочный вариант ЕГЭ № 79">79</VariantsLink>
                    <VariantsLink to="/test?id=5410467" title="Александр Ларин, тренировочный вариант ЕГЭ № 78">78</VariantsLink>
                    <VariantsLink to="/test?id=5410466" title="Александр Ларин, тренировочный вариант ЕГЭ № 77">77</VariantsLink>
                    <VariantsLink to="/test?id=5410465" title="Александр Ларин, тренировочный вариант ЕГЭ № 76">76</VariantsLink>
                    <VariantsLink to="/test?id=5410464" title="Александр Ларин, тренировочный вариант ЕГЭ № 75">75</VariantsLink>
                    <VariantsLink to="/test?id=5410463" title="Александр Ларин, тренировочный вариант ЕГЭ № 74">74</VariantsLink>
                    <VariantsLink to="/test?id=5410462" title="Александр Ларин, тренировочный вариант ЕГЭ № 73">73</VariantsLink>
                    <VariantsLink to="/test?id=5410461" title="Александр Ларин, тренировочный вариант ЕГЭ № 72">72</VariantsLink>
                    <VariantsLink to="/test?id=5410460" title="Александр Ларин, тренировочный вариант ЕГЭ № 71">71</VariantsLink>
                    <VariantsLink to="/test?id=5410459" title="Александр Ларин, тренировочный вариант ЕГЭ № 70">70</VariantsLink>
                    <VariantsLink to="/test?id=5410458" title="Александр Ларин, тренировочный вариант ЕГЭ № 69">69</VariantsLink>
                    <VariantsLink to="/test?id=5410457" title="Александр Ларин, тренировочный вариант ЕГЭ № 68">68</VariantsLink>
                    <VariantsLink to="/test?id=5409850" title="Александр Ларин, тренировочный вариант ЕГЭ № 67">67</VariantsLink>
                    <VariantsLink to="/test?id=5409849" title="Александр Ларин, тренировочный вариант ЕГЭ № 66">66</VariantsLink>
                    <VariantsLink to="/test?id=5409848" title="Александр Ларин, тренировочный вариант ЕГЭ № 65">65</VariantsLink>
                    <VariantsLink to="/test?id=5409847" title="Александр Ларин, тренировочный вариант ЕГЭ № 64">64</VariantsLink>
                    <VariantsLink to="/test?id=5409846" title="Александр Ларин, тренировочный вариант ЕГЭ № 63">63</VariantsLink>
                    <VariantsLink to="/test?id=5409845" title="Александр Ларин, тренировочный вариант ЕГЭ № 62">62</VariantsLink>
                    <VariantsLink to="/test?id=5409844" title="Александр Ларин, тренировочный вариант ЕГЭ № 61">61</VariantsLink>
                    <VariantsLink to="/test?id=5409843" title="Александр Ларин, тренировочный вариант ЕГЭ № 60">60</VariantsLink>
                    <VariantsLink to="/test?id=5409842" title="Александр Ларин, тренировочный вариант ЕГЭ № 59">59</VariantsLink>
                    <VariantsLink to="/test?id=5409840" title="Александр Ларин, тренировочный вариант ЕГЭ № 58">58</VariantsLink>
                    <VariantsLink to="/test?id=5409839" title="Александр Ларин, тренировочный вариант ЕГЭ № 57">57</VariantsLink>
                    <VariantsLink to="/test?id=5409838" title="Александр Ларин, тренировочный вариант ЕГЭ № 56">56</VariantsLink>
                    <VariantsLink to="/test?id=5409836" title="Александр Ларин, тренировочный вариант ЕГЭ № 55">55</VariantsLink>
                    <VariantsLink to="/test?id=5409835" title="Александр Ларин, тренировочный вариант ЕГЭ № 54">54</VariantsLink>
                    <VariantsLink to="/test?id=5409834" title="Александр Ларин, тренировочный вариант ЕГЭ № 53">53</VariantsLink>
                    <VariantsLink to="/test?id=5409833" title="Александр Ларин, тренировочный вариант ЕГЭ № 52">52</VariantsLink>
                    <VariantsLink to="/test?id=5409832" title="Александр Ларин, тренировочный вариант ЕГЭ № 51">51</VariantsLink>
                    <VariantsLink to="/test?id=5409831" title="Александр Ларин, тренировочный вариант ЕГЭ № 50">50</VariantsLink>
                    <VariantsLink to="/test?id=5409830" title="Александр Ларин, тренировочный вариант ЕГЭ № 49">49</VariantsLink>
                    <VariantsLink to="/test?id=5409829" title="Александр Ларин, тренировочный вариант ЕГЭ № 48">48</VariantsLink>
                    <VariantsLink to="/test?id=5409828" title="Александр Ларин, тренировочный вариант ЕГЭ № 47">47</VariantsLink>
                    <VariantsLink to="/test?id=5409826" title="Александр Ларин, тренировочный вариант ЕГЭ № 46">46</VariantsLink>
                    <VariantsLink to="/test?id=5409825" title="Александр Ларин, тренировочный вариант ЕГЭ № 45">45</VariantsLink>
                    <VariantsLink to="/test?id=5409820" title="Александр Ларин, тренировочный вариант ЕГЭ № 44">44</VariantsLink>
                    <VariantsLink to="/test?id=5409819" title="Александр Ларин, тренировочный вариант ЕГЭ № 43">43</VariantsLink>
                    <VariantsLink to="/test?id=5409813" title="Александр Ларин, тренировочный вариант ЕГЭ № 42">42</VariantsLink>
                    <VariantsLink to="/test?id=5407768" title="Александр Ларин, тренировочный вариант ЕГЭ № 41">41</VariantsLink>
                    <VariantsLink to="/test?id=5404759" title="Александр Ларин, тренировочный вариант ЕГЭ № 40">40</VariantsLink>
                    <VariantsLink to="/test?id=5411702" title="Александр Ларин, тренировочный вариант ЕГЭ № 39">39</VariantsLink>
                    <VariantsLink to="/test?id=5411701" title="Александр Ларин, тренировочный вариант ЕГЭ № 38">38</VariantsLink>
                    <VariantsLink to="/test?id=5410693" title="Александр Ларин, тренировочный вариант ЕГЭ № 37">37</VariantsLink>
                    <VariantsLink to="/test?id=5410692" title="Александр Ларин, тренировочный вариант ЕГЭ № 36">36</VariantsLink>
                    <VariantsLink to="/test?id=5410691" title="Александр Ларин, тренировочный вариант ЕГЭ № 35">35</VariantsLink>
                    <VariantsLink to="/test?id=5410690" title="Александр Ларин, тренировочный вариант ЕГЭ № 34">34</VariantsLink>
                    <VariantsLink to="/test?id=5410689" title="Александр Ларин, тренировочный вариант ЕГЭ № 33">33</VariantsLink>
                    <VariantsLink to="/test?id=5410688" title="Александр Ларин, тренировочный вариант ЕГЭ № 32">32</VariantsLink>
                    <VariantsLink to="/test?id=5410687" title="Александр Ларин, тренировочный вариант ЕГЭ № 31">31</VariantsLink>
                    <VariantsLink to="/test?id=5410686" title="Александр Ларин, тренировочный вариант ЕГЭ № 30">30</VariantsLink>
                    <VariantsLink to="/test?id=5410685" title="Александр Ларин, тренировочный вариант ЕГЭ № 29">29</VariantsLink>
                    <VariantsLink to="/test?id=5410684" title="Александр Ларин, тренировочный вариант ЕГЭ № 28">28</VariantsLink>
                    <VariantsLink to="/test?id=5410683" title="Александр Ларин, тренировочный вариант ЕГЭ № 27">27</VariantsLink>
                    <VariantsLink to="/test?id=5410682" title="Александр Ларин, тренировочный вариант ЕГЭ № 26">26</VariantsLink>
                    <VariantsLink to="/test?id=5410681" title="Александр Ларин, тренировочный вариант ЕГЭ № 25">25</VariantsLink>
                    <VariantsLink to="/test?id=5410680" title="Александр Ларин, тренировочный вариант ЕГЭ № 24">24</VariantsLink>
                    <VariantsLink to="/test?id=5410679" title="Александр Ларин, тренировочный вариант ЕГЭ № 23">23</VariantsLink>
                    <VariantsLink to="/test?id=5410678" title="Александр Ларин, тренировочный вариант ЕГЭ № 22">22</VariantsLink>
                    <VariantsLink to="/test?id=5410677" title="Александр Ларин, тренировочный вариант ЕГЭ № 21">21</VariantsLink>
                    <VariantsLink to="/test?id=5410676" title="Александр Ларин, тренировочный вариант ЕГЭ № 20">20</VariantsLink>
                    <VariantsLink to="/test?id=5410675" title="Александр Ларин, тренировочный вариант ЕГЭ № 19">19</VariantsLink>
                    <VariantsLink to="/test?id=5410674" title="Александр Ларин, тренировочный вариант ЕГЭ № 18">18</VariantsLink>
                    <VariantsLink to="/test?id=5410673" title="Александр Ларин, тренировочный вариант ЕГЭ № 17">17</VariantsLink>
                    <VariantsLink to="/test?id=5410672" title="Александр Ларин, тренировочный вариант ЕГЭ № 16">16</VariantsLink>
                    <VariantsLink to="/test?id=5410671" title="Александр Ларин, тренировочный вариант ЕГЭ № 15">15</VariantsLink>
                    <VariantsLink to="/test?id=5410670" title="Александр Ларин, тренировочный вариант ЕГЭ № 14">14</VariantsLink>
                    <VariantsLink to="/test?id=5410669" title="Александр Ларин, тренировочный вариант ЕГЭ № 13">13</VariantsLink>
                    <VariantsLink to="/test?id=5410668" title="Александр Ларин, тренировочный вариант ЕГЭ № 12">12</VariantsLink>
                    <VariantsLink to="/test?id=5410667" title="Александр Ларин, тренировочный вариант ЕГЭ № 11">11</VariantsLink>
                    <VariantsLink to="/test?id=5410659" title="Александр Ларин, тренировочный вариант ЕГЭ № 10">10</VariantsLink>
                    <VariantsLink to="/test?id=5410654" title="Александр Ларин, тренировочный вариант ЕГЭ № 9">9</VariantsLink>
                    <VariantsLink to="/test?id=5410650" title="Александр Ларин, тренировочный вариант ЕГЭ № 8">8</VariantsLink>
                    <VariantsLink to="/test?id=5410649" title="Александр Ларин, тренировочный вариант ЕГЭ № 7">7</VariantsLink>
                    <VariantsLink to="/test?id=5410648" title="Александр Ларин, тренировочный вариант ЕГЭ № 6">6</VariantsLink>
                    <VariantsLink to="/test?id=5410647" title="Александр Ларин, тренировочный вариант ЕГЭ № 5">5</VariantsLink>
                    <VariantsLink to="/test?id=5411703" title="Александр Ларин, тренировочный вариант ЕГЭ № 4*">4*</VariantsLink>
                    <VariantsLink to="/test?id=5410646" title="Александр Ларин, тренировочный вариант ЕГЭ № 4">4</VariantsLink>
                    <VariantsLink to="/test?id=5410645" title="Александр Ларин, тренировочный вариант ЕГЭ № 3">3</VariantsLink>
                    <VariantsLink to="/test?id=5410471" title="Александр Ларин, тренировочный вариант ЕГЭ № 2">2</VariantsLink>
                    <VariantsLink to="/test?id=5410470" title="Александр Ларин, тренировочный вариант ЕГЭ № 1">1</VariantsLink>
                </Grid>
                {!areVariantsAll && (
                    <div className="Link Link_pseudo Link_wrap VariantsBox-Control LarinVariants-Control" onClick={() => setAreVariantsAll(true)}>
                        <u className="Link-U Link_pseudo-U Link_wrap-U">Показать все</u>
                    </div>
                )}
            </div>
	    </Section>
    );
};

export default LarinVariants;
